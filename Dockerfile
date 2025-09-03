FROM alpine:3.17

WORKDIR /app

# Copy binary + migrations
COPY pocketbase /app/pocketbase
COPY pb_migrations /app/pb_migrations

RUN chmod +x /app/pocketbase

# Expose default PocketBase port
EXPOSE 8080

# Run PocketBase
CMD ["sh", "-c", "./pocketbase serve --http=0.0.0.0:8080 --dir /data"]
