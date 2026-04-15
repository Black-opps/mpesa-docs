# docker-compose

# Docker Compose Setup Guide 🐳

How to run the entire M-PESA Analytics platform locally using Docker Compose.

---

## Quick Start

```bash
# 1. Clone the main platform repo (if not already done)
git clone https://github.com/Black-opps/mpesa-analytics-platform.git
cd mpesa-analytics-platform

# 2. Copy environment template
cp .env.example .env

# 3. Start all services
docker-compose up -d --build
```

Useful Commands

# Start specific service

docker-compose up -d gateway analytics

# View logs

docker-compose logs -f analytics

# Restart a service

docker-compose restart payment

# Stop everything

docker-compose down

# Rebuild after code changes

docker-compose up -d --build
