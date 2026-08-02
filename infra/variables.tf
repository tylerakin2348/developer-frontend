variable "aws_region" {
  type        = string
  description = "AWS region for all resources"
  default     = "us-east-1"
}

variable "project_name" {
  type        = string
  description = "Name prefix for resources"
  default     = "developer-frontend"
}

variable "db_username" {
  type        = string
  description = "RDS master username"
  default     = "appadmin"
}

variable "github_repository" {
  type        = string
  description = "HTTPS GitHub repo URL Amplify will clone, e.g. https://github.com/owner/developer-frontend"
}

variable "github_access_token" {
  type        = string
  description = "GitHub PAT Amplify uses to clone the repo (repo contents read)"
  sensitive   = true
}

variable "amplify_branch_name" {
  type        = string
  description = "Git branch Amplify Hosting builds"
  default     = "main"
}

variable "cron_secret" {
  type        = string
  description = "Shared secret for Authorization Bearer on /api/cron/send-newsletter"
  sensitive   = true
}

variable "ses_from_email" {
  type        = string
  description = "Verified SES From address (must be verified in SES before sending)"
}

variable "allowed_cidr_blocks" {
  type        = list(string)
  description = "CIDRs allowed to reach Postgres. Use your IP for admin; Amplify without VPC often needs 0.0.0.0/0."
  default     = ["0.0.0.0/0"]
}
