# environment-variables

---

### 2. `docs/development/environment-variables.md`

````markdown
# Environment Variables Guide ⚙️

This document lists all important environment variables used across the platform.

---

## Core Variables (All Services)

| Variable       | Description                | Default Value              | Required |
| -------------- | -------------------------- | -------------------------- | -------- |
| `SECRET_KEY`   | JWT signing key            | (strong random string)     | Yes      |
| `DATABASE_URL` | Database connection string | `sqlite:///./service.db`   | Yes      |
| `REDIS_URL`    | Redis connection           | `redis://localhost:6379/0` | Yes      |
| `ENVIRONMENT`  | Current environment        | `development`              | No       |
| `DEBUG`        | Enable debug mode          | `true`                     | No       |

---

## Service-Specific Variables

### Gateway Service

```env
AUTH_SERVICE_URL=http://localhost:8001
TENANT_SERVICE_URL=http://localhost:8002
ANALYTICS_SERVICE_URL=http://localhost:8000
PAYMENT_SERVICE_URL=http://localhost:8007
```
````

Auth Service
envJWT_SECRET_KEY=super-secret-key-for-mpesa-platform-2026-change-in-production
JWT_ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=60
Analytics Service
envDATABASE_URL=postgresql://user:pass@localhost:5432/analytics
Payment Service (M-PESA)
envMPESA_CONSUMER_KEY=...
MPESA_CONSUMER_SECRET=...
MPESA_SHORTCODE=...
MPESA_PASSKEY=...
MPESA_CALLBACK_URL=https://yourdomain.com/webhooks/mpesa

Local Development .env Example
Create a .env file in the root of each service with:
envENVIRONMENT=development
DEBUG=true
SECRET_KEY=dev-super-secret-key-change-in-production
DATABASE_URL=sqlite:///./service.db
REDIS_URL=redis://localhost:6379/0

Best Practices

Never commit .env files
Use different secrets in production
Use Docker Secrets or Kubernetes Secrets in production
Rotate SECRET_KEY periodically
Use environment-specific config files
