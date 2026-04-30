#!/bin/sh
set -e

echo "[entrypoint] Running Payload migrations…"
npm run migrate

echo "[entrypoint] Starting Next.js…"
exec npm run start
