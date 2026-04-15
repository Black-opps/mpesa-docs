# docker

# Docker Deployment Guide 🐳

How to run the full M-PESA Analytics Platform using Docker.

---

## Prerequisites

- Docker Desktop / Docker Engine
- Docker Compose v2+
- At least 8GB RAM recommended

---

## Quick Start (Recommended)

```bash
# 1. Clone the main platform repository
git clone https://github.com/Black-opps/mpesa-analytics-platform.git
cd mpesa-analytics-platform

# 2. Copy environment variables
cp .env.example .env

# 3. Start everything
docker-compose up -d --build
```
