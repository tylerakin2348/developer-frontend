# developer.tylerakin.com

Next.js site for developer.tylerakin.com — AWS Amplify Hosting, RDS Postgres, SES email, and EventBridge → Lambda cron. Infra (including Amplify) is managed with Terraform under `infra/`.

## Getting Started

```bash
yarn install
cp .env.example .env.local
yarn dev
```

App: http://localhost:3000

## Scripts

- `yarn dev` – local development
- `yarn build` / `yarn start` – production build & serve
- `yarn lint` – ESLint

## Architecture

| Piece | AWS |
| --- | --- |
| Next.js UI + API | **Amplify Hosting** (SSR / `WEB_COMPUTE`) via Terraform |
| Postgres | **RDS** `db.t4g.micro` |
| Email | **SES** (Amplify SSR IAM role allowed to send) |
| Outbox drain | **EventBridge** every 10m → **Lambda** → `GET /api/cron/send-newsletter` |
| Secrets | **Secrets Manager** |
| CI/CD | **GitHub Actions** (`start-job` for Amplify builds) |

Newsletter flow: form → `POST /api/newsletter/subscribe` → `email_outbox` → cron Lambda → SES.

## Estimated cost (low traffic)

| Item | Ballpark |
| --- | --- |
| Amplify Hosting | Often **<$5/mo** |
| RDS `db.t4g.micro` | **~$12–15/mo**, or Free Tier ~12 months |
| Lambda + EventBridge | Near **$0** |
| SES | **~$0.10 / 1k emails** |
| **Total** | Roughly **$5–20/mo** after Free Tier |

## One-time setup

1. **GitHub PAT** — Create a token Amplify can use to clone this repo (classic `repo`, or fine-grained Contents: Read).
2. **SES** — Verify domain/email used in `SES_FROM_EMAIL`. Exit sandbox when you need to mail arbitrary recipients.
3. **GitHub Actions secrets**

| Secret | Purpose |
| --- | --- |
| `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` | IAM user that can run Terraform + Amplify jobs |
| `AWS_REGION` | e.g. `us-east-1` |
| `GITHUB_REPOSITORY_URL` | `https://github.com/OWNER/developer-frontend` |
| `AMPLIFY_GITHUB_TOKEN` | PAT for Amplify → GitHub clone |
| `SES_FROM_EMAIL` | Verified From address |
| `CRON_SECRET` | Long random Bearer token for cron |
| `AMPLIFY_BRANCH` | Optional; defaults to `main` |
| `AMPLIFY_APP_ID` | From Terraform output `amplify_app_id` (after first apply) |
| `DATABASE_URL_SECRET_ARN` | From Terraform output `database_url_secret_arn` |

4. Apply infra, then migrate, then deploy:

```bash
cd infra
cp terraform.tfvars.example terraform.tfvars   # edit values
terraform init
terraform apply
# note outputs: amplify_app_id, database_url_secret_arn, app_base_url
```

Or run the **Deploy AWS Infra** workflow.

5. Save `amplify_app_id` / `database_url_secret_arn` into GitHub secrets.
6. Run **Run DB Migrations**, then **Deploy Amplify**.

Terraform creates the Amplify app + `main` branch, wires branch env (`DATABASE_URL`, `SES_FROM_EMAIL`, `CRON_SECRET`, `AWS_REGION`), attaches an SSR IAM role with SES send, and points the cron Lambda at `https://{branch}.{appId}.amplifyapp.com`.

Auto-build on Amplify is **off** so GitHub Actions owns releases (`aws amplify start-job`).

## Deploy workflows

| Workflow | When |
| --- | --- |
| **CI** | lint + build on push/PR |
| **Deploy AWS Infra** | `infra/**` changes (RDS, Amplify app/branch, Secrets, EventBridge, Lambda) |
| **Run DB Migrations** | `db/migrations/**` changes |
| **Deploy Amplify** | push to `main` — starts Amplify RELEASE job |

## Security notes

- RDS is **publicly accessible** so Amplify SSR can reach it without VPC peering. Tighten `allowed_cidr_blocks` when you can.
- Never commit `terraform.tfvars`, `.env.local`, or GitHub PATs.
