data "aws_iam_policy_document" "amplify_assume" {
  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["amplify.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "amplify_ssr" {
  name               = "${var.project_name}-amplify-ssr"
  assume_role_policy = data.aws_iam_policy_document.amplify_assume.json
}

data "aws_iam_policy_document" "amplify_ssr" {
  statement {
    sid = "SesSend"
    actions = [
      "ses:SendEmail",
      "ses:SendRawEmail",
      "ses:SendBulkEmail"
    ]
    resources = ["*"]
  }

  # Needed for Amplify Hosting compute / SSR platform features.
  statement {
    sid = "AmplifySsrBasics"
    actions = [
      "logs:CreateLogGroup",
      "logs:CreateLogStream",
      "logs:PutLogEvents"
    ]
    resources = ["arn:aws:logs:*:*:*"]
  }
}

resource "aws_iam_role_policy" "amplify_ssr" {
  name   = "${var.project_name}-amplify-ssr"
  role   = aws_iam_role.amplify_ssr.id
  policy = data.aws_iam_policy_document.amplify_ssr.json
}

resource "aws_amplify_app" "main" {
  name       = var.project_name
  repository = var.github_repository
  # GitHub PAT with `repo` scope (fine-grained: Contents read + Metadata).
  access_token = var.github_access_token

  platform             = "WEB_COMPUTE"
  iam_service_role_arn = aws_iam_role.amplify_ssr.arn

  # Builds are triggered by GitHub Actions (aws amplify start-job), not Amplify webhooks.
  enable_branch_auto_build = false

  environment_variables = {
    AMPLIFY_MONOREPO_APP_ROOT = "."
  }
}

resource "aws_amplify_branch" "main" {
  app_id      = aws_amplify_app.main.id
  branch_name = var.amplify_branch_name

  framework = "Next.js - SSR"
  stage     = "PRODUCTION"

  enable_auto_build           = false
  enable_performance_mode     = false
  enable_pull_request_preview = false

  environment_variables = {
    DATABASE_URL   = aws_secretsmanager_secret_version.database_url.secret_string
    SES_FROM_EMAIL = var.ses_from_email
    CRON_SECRET    = var.cron_secret
    AWS_REGION     = var.aws_region
  }
}

locals {
  # Default Amplify Hosting URL: https://{branch}.{appId}.amplifyapp.com
  amplify_app_base_url = "https://${aws_amplify_branch.main.branch_name}.${aws_amplify_app.main.id}.amplifyapp.com"
}
