# 🛍️ Docker E-commerce Microservices Simulation

This project simulates a simple e-commerce platform based on a microservices architecture using Docker Compose.  
The goal is to design, configure, and run a system demonstrating advanced Docker Compose features like:

- Configuration profiles
- Environment variable management (.env file)
- Container lifecycle hooks (`post_start`, `pre_stop`)
- Healthchecks
- Service dependencies (`depends_on` with conditions)
- Custom Docker networks

---

## 🏗 Architecture

The system consists of **seven services**:

| Service | Description |
|:--------|:------------|
| **frontend** | Simple frontend (served by Nginx) |
| **api-gateway** | API gateway routing requests to backend services |
| **product-service** | Microservice handling products, connected to PostgreSQL |
| **order-service** | Microservice handling orders, connected to Redis |
| **database** | PostgreSQL database for persistent storage |
| **redis-cache** | Redis database for session/cache storage |
| **dev-monitor** | Monitoring tool activated by the `dev` profile |

---

## 📊 Features

- Full microservices isolation with custom bridge networks
- Environment variables centralized in a `.env` file
- Persistent data storage using Docker volumes
- Service healthchecks and startup dependencies
- Simulated product and order management APIs

---

## ⚡ Quick Start

```bash
git clone https://github.com/WiktorL123/docker_ecommerce_new.git
cd docker_ecommerce_new
docker compose up --build
```

Access the services:
- Product Service: [http://localhost:3001/products](http://localhost:3001/products)
- Order Service: [http://localhost:3002/orders](http://localhost:3002/orders)

---

## 🔗 Future Improvements

- Add API Gateway request routing
- Implement frontend UI interactions
- Extend healthchecks and lifecycle hooks
- Add dev profile to simulate monitoring

---

Happy coding! 🌟

