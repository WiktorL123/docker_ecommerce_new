FROM alpine:latest

RUN apk add --no-cache curl postgresql-client redis

COPY monitor.sh /monitor.sh

RUN chmod +x /monitor.sh

CMD ["sh", "/monitor.sh"]
