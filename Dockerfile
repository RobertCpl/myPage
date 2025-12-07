FROM node:20-alpine AS base

# Set working directory
WORKDIR /app

# Dependencies install stage (cached)
FROM base AS deps

# Install required system tools (for potential build needs)
RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json ./
RUN npm ci

# Production build stage
FROM base AS builder

ENV NODE_ENV=production

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Final stage – minimal runtime image
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# For Next.js it's recommended to run as a non-root user
RUN addgroup -g 1001 -S nodejs \
  && adduser -S nextjs -u 1001

# Copy only what is needed to run the application
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

CMD ["npm", "start"]


