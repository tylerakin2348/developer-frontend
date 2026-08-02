output "rds_endpoint" {
  value       = aws_db_instance.app.address
  description = "RDS hostname"
}

output "database_url_secret_arn" {
  value       = aws_secretsmanager_secret.database_url.arn
  description = "Secrets Manager ARN for DATABASE_URL"
}

output "app_env_secret_arn" {
  value       = aws_secretsmanager_secret.app_env.arn
  description = "JSON secret with DATABASE_URL, SES_FROM_EMAIL, CRON_SECRET, AWS_REGION"
}

output "amplify_app_id" {
  value       = aws_amplify_app.main.id
  description = "Amplify app id (set GitHub secret AMPLIFY_APP_ID from this)"
}

output "amplify_branch" {
  value       = aws_amplify_branch.main.branch_name
  description = "Amplify branch name"
}

output "app_base_url" {
  value       = local.amplify_app_base_url
  description = "Default Amplify Hosting URL used by the cron Lambda"
}

output "default_domain" {
  value       = aws_amplify_app.main.default_domain
  description = "Amplify default domain (*.amplifyapp.com)"
}

output "cron_lambda_name" {
  value = aws_lambda_function.cron.function_name
}

output "estimated_monthly_note" {
  value = "Low-traffic ballpark: db.t4g.micro ~$12–15/mo (free-tier eligible first year), Lambda/EventBridge near $0, Amplify often <$5/mo. SES ~$0.10/1k emails."
}
