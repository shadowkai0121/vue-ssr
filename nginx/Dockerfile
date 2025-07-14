FROM nginx:stable-alpine

COPY config/nginx.conf      /etc/nginx/nginx.conf
COPY config/conf.d          /etc/nginx/conf.d
COPY config/mime.types      /etc/nginx/mime.types
COPY config/fastcgi.conf    /etc/nginx/fastcgi.conf
COPY config/fastcgi_params  /etc/nginx/fastcgi_params
COPY config/scgi_params     /etc/nginx/scgi_params
COPY config/uwsgi_params    /etc/nginx/uwsgi_params

EXPOSE 80 81 443
CMD ["nginx", "-g", "daemon off;"]
