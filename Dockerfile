FROM node:24-bookworm-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY index.html vite.config.js ./
COPY public/ public/
COPY src/ src/
COPY backend/export-corpus.mjs backend/
RUN node backend/export-corpus.mjs && VITE_RESUME_API_URL=/ npm run build

FROM python:3.12-slim
WORKDIR /app
ENV PYTHONUNBUFFERED=1 PORT=8080 PORTFOLIO_STATIC_DIR=/app/dist
COPY backend/requirements.txt backend/
RUN pip install --no-cache-dir -r backend/requirements.txt
COPY backend/app.py backend/
COPY --from=build /app/backend/corpus.json backend/
COPY --from=build /app/dist dist/
USER 65532:65532
CMD ["sh", "-c", "exec python -m uvicorn backend.app:app --host 0.0.0.0 --port \"$PORT\""]
