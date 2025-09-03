FROM alpine:3.17

WORKDIR /app
COPY pocketbase /app/pocketbase
COPY pb_migrations /app/pb_migrations

RUN chmod +x /app/pocketbase

EXPOSE 8085

CMD ["./pocketbase", "serve", "--http=0.0.0.0:8080"]
