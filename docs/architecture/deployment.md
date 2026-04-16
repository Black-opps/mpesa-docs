# deployment

# Deployment Guide

This document explains how to deploy the **M-PESA Analytics SaaS Platform**, an 11-microservice distributed fintech system designed for multi-tenant analytics workloads.

The platform supports:

- Local development deployment
- Docker Compose environments
- Production-ready Kubernetes deployment

---

# Architecture Overview

Deployment topology:

React Dashboard
↓
API Gateway (Port 9000)
↓
Core Platform Services
↓
Analytics Pipeline Services
↓
Kafka + PostgreSQL + Redis

---

# Local Development Deployment

## Requirements

Install:

- Python 3.12
- PostgreSQL
- Redis
- Kafka
- Node.js 20+
- Docker (optional)

Clone repositories:

```
git clone https://github.com/Black-opps/mpesa-analytics-dashboard
git clone https://github.com/Black-opps/mpesa-api-gateway
git clone https://github.com/Black-opps/auth-service
```

Repeat for remaining services.

---

# Start Infrastructure

Start PostgreSQL:

```
docker run -p 5432:5432 postgres
```

Start Redis:

```
docker run -p 6379:6379 redis
```

Start Kafka:

```
docker compose up kafka
```

---

# Start Services (recommended order)

Start services in dependency order:

```
auth-service
tenant-service
payment-service
billing-service
parser-service
categorizer-service
analytics-service
cashflow-service
webhook-service
api-gateway
dashboard
```

---

# Docker Compose Deployment

Recommended development environment:

```
docker compose up --build
```

Starts:

- PostgreSQL
- Redis
- Kafka
- All backend services
- API Gateway

Ports exposed:

| Service     | Port |
| ----------- | ---- |
| Auth        | 8001 |
| Tenant      | 8002 |
| Analytics   | 8000 |
| Parser      | 8004 |
| Cashflow    | 8005 |
| Payment     | 8007 |
| Billing     | 8008 |
| Categorizer | 8009 |
| Webhook     | 8010 |
| Gateway     | 9000 |
| Dashboard   | 3000 |

---

# Production Deployment Strategy

Production architecture:

```
Load Balancer
↓
API Gateway Cluster
↓
Service Mesh
↓
Microservices
↓
Kafka + PostgreSQL + Redis
```

---

# Kubernetes Deployment

Each service runs as:

```
Deployment
Service
ConfigMap
Secret
HorizontalPodAutoscaler
```

Example:

```
kubectl apply -f k8s/auth-service/
```

Repeat per service.

---

# Environment Variables

Required variables:

```
DATABASE_URL
REDIS_URL
KAFKA_BOOTSTRAP_SERVERS
JWT_SECRET_KEY
TENANT_MODE
```

---

# Observability Stack

Recommended production stack:

Prometheus  
Grafana  
Loki  
OpenTelemetry

Metrics exposed via:

```
/metrics
```

on each service.

---

# Scaling Strategy

Stateless services scale horizontally:

```
kubectl scale deployment analytics-service --replicas=3
```

Kafka enables async pipeline scalability.

---

# Security Configuration

Production requirements:

TLS termination at load balancer  
JWT validation at API Gateway  
Secrets stored in Kubernetes Secrets  
Tenant isolation enforcement

---

# Recommended Production Topology

Minimum cluster layout:

```
3 API Gateway replicas
2 Auth replicas
2 Tenant replicas
2 Analytics replicas
Kafka cluster (3 brokers)
PostgreSQL primary + replica
Redis cluster
```

---

# CI/CD Deployment Flow

Pipeline stages:

```
lint
test
build docker images
push to registry
deploy to staging
deploy to production
```

GitHub Actions supported.

---

# Next Steps

See:

deployment/docker.md  
deployment/kubernetes.md  
deployment/ci-cd.md
