# develop stage
FROM node:14.17.4-alpine as develop-stage
# create destination directory
RUN mkdir -p /app
WORKDIR /app

COPY package*.json ./
COPY . .
# build stage
FROM develop-stage as build-stage
RUN yarn
RUN yarn build

# production stage
FROM nginx:1.21.1-alpine as production-stage
ADD ./docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
