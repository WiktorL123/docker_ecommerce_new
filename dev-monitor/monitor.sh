√#!/bin/sh

 echo "✅ DEV MONITOR STARTED"

 i=100

 while [ "$i" -gt 0 ]; do
   echo "🟢 Checking product-service..."
   curl -s http://api-gateway:3000/products >/dev/null \
     && echo "✅ Product-service OK" \
     || echo "❌ Product-service ERROR"

   echo "🟢 Checking order-service..."
   curl -s http://api-gateway:3000/orders >/dev/null \
     && echo "✅ Order-service OK" \
     || echo "❌ Order-service ERROR"

   echo "🟢 Checking API Gateway..."
   curl -s http://api-gateway:3000/products >/dev/null \
     && echo "✅ API Gateway OK" \
     || echo "❌ API Gateway ERROR"

   echo "🟢 Checking Redis..."
   redis-cli -h redis-cache PING | grep -q PONG \
     && echo "✅ Redis OK" \
     || echo "❌ Redis ERROR"

   echo "🟢 Checking PostgreSQL..."
   if pg_isready -h database -U "$POSTGRES_USER" >/dev/null; then
     echo "✅ PostgreSQL OK"
   else
     echo "❌ PostgreSQL ERROR"
   fi

   i=$((i - 1))
   echo "⏳ Next check in 10s..."
   echo "-----------------------------------"
   sleep 10
 done
