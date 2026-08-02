data "archive_file" "cron_lambda" {
  type        = "zip"
  source_file = "${path.module}/lambda/cron/index.mjs"
  output_path = "${path.module}/.build/cron.zip"
}

resource "aws_iam_role" "cron_lambda" {
  name = "${var.project_name}-cron-lambda"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action    = "sts:AssumeRole"
      Effect    = "Allow"
      Principal = { Service = "lambda.amazonaws.com" }
    }]
  })
}

resource "aws_iam_role_policy_attachment" "cron_lambda_basic" {
  role       = aws_iam_role.cron_lambda.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_lambda_function" "cron" {
  function_name = "${var.project_name}-send-newsletter"
  role          = aws_iam_role.cron_lambda.arn
  handler       = "index.handler"
  runtime       = "nodejs20.x"
  timeout       = 60

  filename         = data.archive_file.cron_lambda.output_path
  source_code_hash = data.archive_file.cron_lambda.output_base64sha256

  environment {
    variables = {
      APP_BASE_URL = local.amplify_app_base_url
      CRON_SECRET  = var.cron_secret
    }
  }
}

resource "aws_cloudwatch_event_rule" "newsletter_cron" {
  name                = "${var.project_name}-newsletter-cron"
  description         = "Drain newsletter email outbox every 10 minutes"
  schedule_expression = "rate(10 minutes)"
}

resource "aws_cloudwatch_event_target" "newsletter_cron" {
  rule      = aws_cloudwatch_event_rule.newsletter_cron.name
  target_id = "SendNewsletterLambda"
  arn       = aws_lambda_function.cron.arn
}

resource "aws_lambda_permission" "allow_eventbridge" {
  statement_id  = "AllowExecutionFromEventBridge"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.cron.function_name
  principal     = "events.amazonaws.com"
  source_arn    = aws_cloudwatch_event_rule.newsletter_cron.arn
}
