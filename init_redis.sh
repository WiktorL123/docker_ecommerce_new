#!/bin/bash

echo "📦 Inicjalizacja danych w Redisie..."
docker exec -i docker_ecommerce_new-redis-cache-1 redis-cli <<EOF
SET order:1 '{"productId": 1, "quantity": 2}'
SET order:2 '{"productId": 3, "quantity": 1}'
EOF
echo "✅ Redis gotowy."
