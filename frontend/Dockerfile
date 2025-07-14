ARG NODE_VERSION=22.17.0
FROM node:${NODE_VERSION}-alpine AS builder

RUN npm install -g pnpm

WORKDIR /app

COPY . .

RUN pnpm install --frozen-lockfile

RUN pnpm run build

# Production image
FROM node:${NODE_VERSION}-alpine AS production

# 建立非 root user
RUN addgroup -S nuxt && adduser -S nuxt -G nuxt

WORKDIR /app

# Copy build 完成後的輸出
COPY --from=builder /app/.output ./

EXPOSE 3000

# 使用非 root user 運行
USER nuxt

CMD ["node", "server/index.mjs"]
