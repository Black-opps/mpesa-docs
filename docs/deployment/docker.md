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

Useful Docker Commands

# View logs

docker-compose logs -f gateway
docker-compose logs -f analytics

# Restart a specific service

docker-compose restart analytics

# Stop everything

docker-compose down

# Rebuild after code changes

docker-compose up -d --build

Kubernetes Deployment

---

### 2. `docs/security/authentication.md`

````markdown
# Authentication & Authorization 🔐

## Overview

The platform uses **JWT-based authentication** with zero-trust principles.

---

## Authentication Flow

1. User logs in via `/api/v1/auth/login`
2. Auth Service validates credentials and issues JWT
3. API Gateway validates JWT on every request (edge validation)
4. Downstream services trust the validated token from Gateway

---

## JWT Structure

```json
{
  "sub": "47cbc9d4...",
  "email": "admin@example.com",
  "role": "admin",
  "tenant_id": "tnt_abc123",
  "exp": 1776000619,
  "iat": 1775997019
}
```
````
