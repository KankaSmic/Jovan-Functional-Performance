# Build static assets
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

# Vite inlines these at build time
ARG VITE_BASE44_APP_ID=
ARG VITE_BASE44_APP_BASE_URL=
ARG VITE_BASE44_FUNCTIONS_VERSION=

ENV VITE_BASE44_APP_ID=$VITE_BASE44_APP_ID
ENV VITE_BASE44_APP_BASE_URL=$VITE_BASE44_APP_BASE_URL
ENV VITE_BASE44_FUNCTIONS_VERSION=$VITE_BASE44_FUNCTIONS_VERSION

RUN npm run build

# Serve with nginx
FROM nginx:1.27-alpine AS runner

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
