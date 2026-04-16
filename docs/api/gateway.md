# gateway

---

### 2. `docs/api/gateway.md`

````markdown
# API Gateway Documentation 🌉

The **central entry point** for the entire M-PESA Analytics Platform.

---

## Overview

- **Framework**: FastAPI
- **Port**: 9000
- **Purpose**: Authentication, routing, rate limiting, observability, and resilience

---

## Core Features

| Feature             | Description                         |
| ------------------- | ----------------------------------- |
| Zero-Trust Auth     | JWT validation at the edge          |
| Circuit Breaker     | Prevents cascading failures         |
| Rate Limiting       | Per-tenant, memory-safe             |
| Request Tracing     | Correlation IDs across all services |
| Timeout Propagation | Smart timeout handling              |
| Service Discovery   | Pluggable (static → Consul/K8s)     |

---

## Available Routes

- `POST /api/v1/auth/login` → Auth Service
- `GET /api/v1/analytics/summary` → Analytics Service
- `POST /api/v1/payments/stkpush` → Payment Service
- All other routes follow pattern: `/api/v1/{service}/{resource}`

---

## Header Propagation

The gateway forwards these headers:

- `Authorization`
- `X-Tenant-ID`
- `X-Request-ID`
- `X-User-ID`
- `X-User-Role`

---

## Example Request

```bash
curl -X GET http://localhost:9000/api/v1/analytics/summary \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```
````
