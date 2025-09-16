# ===== Build =====
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build


# ===== Run (Nginx) =====
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/diario-web/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]