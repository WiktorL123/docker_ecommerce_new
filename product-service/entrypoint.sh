#!/bin/sh

echo "[product-service] STARTING..." >> /app/status.txt

# obsługa SIGTERM
trap 'echo "[product-service] STOPPED (SIGTERM) $(date)" >> /app/status.txt; exit 0' TERM INT

# symulacja init
echo "[product-service] INIT $(date)" >> /app/status.txt

# start node
node app.js &
PID=$!

# czekaj na zakończenie procesu node
wait "$PID"
