# This page will create docker image for angular application

FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
FROM nginx:alpine
COPY --from=node /app/dist/angular /usr/share/nginx/html
EXPOSE 80