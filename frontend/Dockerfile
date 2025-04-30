# Etap 1: build
FROM node:20 as builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Etap 2: serwowanie przez nginx
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
