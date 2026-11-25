# Portfolio

React/Vite portfolio with an optional Python résumé Q&A API. With a Groq API key, it uses the public portfolio content in the selected language to answer both broad and specific questions with links to supporting sections. Without a key it searches for matching excerpts and makes zero model calls.

## Run locally

From the repository root, generate the search corpus and start the API.

```sh
node backend/export-corpus.mjs
python3 -m venv .venv
.venv/bin/pip install -r backend/requirements.txt
.venv/bin/python -m uvicorn backend.app:app
```

In a second terminal, start Vite.

```sh
npm ci
npm run dev
```

Open the Vite URL to use the Q&A panel below the hero. Regenerate the corpus and restart the API after edits to `src/data/content.js`.

To enable generated answers, create a key in a Groq organization on the **Free** plan. Copy the example file once, then set `GROQ_API_KEY` in `backend/.env`. Keep the organization on Free to avoid paid usage. [Groq API keys](https://console.groq.com/keys) · [Free plan limits](https://console.groq.com/docs/rate-limits)

```sh
cp -n backend/.env.example backend/.env
```

Restart the API from the repository root with the local environment file.

```sh
.venv/bin/python -m uvicorn backend.app:app --env-file backend/.env
```

Git ignores `backend/.env`. Commit the blank `backend/.env.example` template. The backend uses Groq’s `openai/gpt-oss-20b` model. Groq enforces the organization’s Free plan limits.

The default allowance is 100 model calls per UTC day per process. `RAG_DAILY_MODEL_CALLS` overrides it. The counter resets on restart, so it is an application limit for a single running process. Excerpts remain available after the allowance is used or if the provider request fails.

## Deploy to Vercel

Import the GitHub repository into Vercel and select the `deploy-vercel` branch as the production branch. Use the repository root and the Vite preset. Add `GROQ_API_KEY` as a server environment variable for Production, then deploy. The website is static and `/api/ask` runs as a Python function on the same domain.

The Vercel branch includes `backend/corpus.json` so it is available when Vercel packages the Python function. Run `node backend/export-corpus.mjs` and commit the refreshed JSON on that branch whenever you update the website content or interview facts.

## Deploy to Render Free

Publish the repository changes to GitHub, then create a Blueprint from the branch containing `render.yaml` in the [Render dashboard](https://dashboard.render.com/blueprints). The Blueprint selects the Free plan and builds the Dockerfile, which serves the website and Q&A API at the same URL.

Enter the Groq Free plan key as `GROQ_API_KEY` when Render prompts for it. Keep the key in Render's configuration. The local `backend/.env` file stays out of Git and the Docker build context.

Render Free services sleep after 15 minutes without traffic. The next visit may take about a minute to wake the service.

## Deploy to Google Cloud Run

The container builds React, exports the knowledge base, and serves both the website and `/api/ask` from one Cloud Run service. Cloud Build receives only the source files listed in `.gcloudignore`. Store the Groq key in Secret Manager as `portfolio-web-groq-api-key` and grant the runtime service account `roles/secretmanager.secretAccessor` on that secret.

An administrator with permission to change the secret's IAM policy can grant access once per project.

```sh
gcloud secrets add-iam-policy-binding portfolio-web-groq-api-key \
  --project="$PORTFOLIO_GCP_PROJECT" \
  --member="serviceAccount:portfolio-web-runtime@${PORTFOLIO_GCP_PROJECT}.iam.gserviceaccount.com" \
  --role=roles/secretmanager.secretAccessor
```

To redeploy from the repository root after the project and secret are configured, set `PORTFOLIO_GCP_PROJECT` and run the following command.

```sh
gcloud run deploy portfolio-web \
  --project="$PORTFOLIO_GCP_PROJECT" --region=asia-southeast1 --source=. \
  --service-account="portfolio-web-runtime@${PORTFOLIO_GCP_PROJECT}.iam.gserviceaccount.com" \
  --update-secrets=GROQ_API_KEY=portfolio-web-groq-api-key:1 \
  --no-invoker-iam-check --min=0 --max=1 --memory=512Mi
```

Use the current secret version if you have rotated the key. Cloud Run prints the public HTTPS URL when deployment finishes. The service can scale to zero. Cloud Build, Artifact Registry, Secret Manager, and Cloud Run usage can incur charges beyond their free allowances.
