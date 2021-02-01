FROM nginx:1.19.1-alpine

COPY ./build /var/www

COPY nginx.cms.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
