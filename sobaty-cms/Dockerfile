# Next.js + Payload CMS production image
# Standalone output is NOT used because Payload's `push`/migrations
# load drizzle-kit dynamically, which Next's static tracer misses.

FROM node:22.17.0-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

# ---------- deps ----------
# --include=dev forces devDependencies regardless of NODE_ENV the host injects
FROM base AS deps
COPY package.json package-lock.json .npmrc* ./
RUN npm ci --include=dev

# ---------- builder ----------
# Next must build with NODE_ENV=production, otherwise React runs in dev mode
# and the prerender step crashes on _global-error (useContext on null).
FROM base AS builder
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build
# Note: devDeps are kept in the runtime image because the Payload CLI
# (used at startup for migrations) needs tsx and other dev-only tooling.

# ---------- runner ----------
FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/next.config.ts ./next.config.ts
COPY --from=builder --chown=nextjs:nodejs /app/tsconfig.json ./tsconfig.json
COPY --from=builder --chown=nextjs:nodejs /app/src ./src

USER nextjs
EXPOSE 3000

CMD ["sh", "-c", "npm run payload migrate && npm run start"]
