# Frontend multi-stage Dockerfile
# Build the Vite + React app, then serve with nginx

FROM node:18-alpine AS build
WORKDIR /app

# Install pnpm and use it to install dependencies
RUN corepack enable && corepack prepare pnpm@latest --activate

# copy lockfile first for layer caching
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# copy source and build
COPY . .
RUN pnpm run build

# Serve with nginx
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
