#!/bin/sh

STATUS_FILE=/status/status.txt
mkdir -p /status

echo "[product-service] STARTING..." >> "$STATUS_FILE"

# obsługa SIGTERM
trap 'echo "[product-service] STOPPED (SIGTERM) $(date)" >> "$STATUS_FILE"; exit 0' TERM INT

# symulacja init
echo "[product-service] INIT $(date)" >> "$STATUS_FILE"

# start node
node app.js &
PID=$!

# czekaj na zakończenie procesu node
wait "$PID"
