# secrets-management

# Secrets Management 🔑

How sensitive credentials and keys are handled across the platform.

---

## Secrets Inventory

| Secret Type        | Storage Method           | Rotation Policy |
| ------------------ | ------------------------ | --------------- |
| JWT Secret Key     | Environment Variables    | Every 90 days   |
| Database Passwords | Docker Secrets / K8s     | On every deploy |
| M-PESA API Keys    | Environment Variables    | Quarterly       |
| Redis Password     | Environment Variables    | On change       |
| Encryption Keys    | HashiCorp Vault (future) | Automatic       |

---

## Current Implementation (Development)

- Secrets stored in `.env` files (not committed)
- Loaded via `pydantic-settings`
- Different secrets per environment

---

## Production Recommendations

### Docker Compose

```yaml
secrets:
  jwt_secret:
    file: ./secrets/jwt_secret.txt
```

Kubernetes (Recommended)

Use Kubernetes Secrets
Or better: External Secrets Operator + HashiCorp Vault / AWS Secrets Manager
Inject as environment variables or mounted files

Best Practices

Never hardcode secrets
Rotate secrets regularly
Use least privilege principle
Audit secret access
Encrypt secrets at rest
Separate secrets per environment (dev/staging/prod)

Future State (Production Ready)

Centralized secrets management with HashiCorp Vault
Automatic secret rotation
Audit logging for secret access
Zero-trust secret access model

Security Rule: If a secret is in Git history → it is compromised.
