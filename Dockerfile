FROM alpine:3.17

WORKDIR /app

# Copy binary + migrations
COPY pocketbase /app/pocketbase
COPY pb_migrations /app/pb_migrations

# Make binary executable
RUN chmod +x /app/pocketbase

# Expose the Render port (Render sets $PORT automatically)
EXPOSE 10000

# Use environment variable PORT (Render sets this automatically)
CMD ["sh", "-c", "./pocketbase serve --http=0.0.0.0:${PORT}"]
