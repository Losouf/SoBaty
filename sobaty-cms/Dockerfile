# syntax=docker/dockerfile:1.7
# Next.js standalone build for Payload CMS
# Requires `output: 'standalone'` in next.config.ts

FROM node:22.17.0-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# ---------- builder ----------
FROM base AS builder
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# PAYLOAD_SECRET is mounted as a BuildKit secret rather than baked in
# Pass it at build time with: --secret id=payload_secret,env=PAYLOAD_SECRET
RUN --mount=type=secret,id=payload_secret,env=PAYLOAD_SECRET \
    npm run build

# ---------- runner ----------
FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
RUN mkdir .next && chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
