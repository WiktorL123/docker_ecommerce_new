#!/bin/bash

echo "🐘 Inicjalizacja danych w Postgresie..."
docker exec -i docker_ecommerce_new-database-1 psql -U admin -d products <<EOF
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

INSERT INTO products (name) VALUES
('Ananas Deluxe'),
('Pizza z ananasem'),
('Ketchup pikantny')
ON CONFLICT DO NOTHING;
EOF
echo "✅ Postgres gotowy."
