FROM node:16.14.2-alpine as build
WORKDIR /app
COPY package.json ./
RUN yarn
COPY . ./
RUN yarn build

FROM nginx:1.21.6-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY configs/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]