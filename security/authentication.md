# authentication

# Authentication & Authorization 🔐

## Overview

The M-PESA Analytics Platform uses a **Zero-Trust** authentication model with JWT tokens validated at the edge (API Gateway).

---

## Authentication Flow

1. User logs in via the React Dashboard
2. Request goes to **API Gateway** → forwarded to **Auth Service**
3. Auth Service validates credentials and issues a JWT token
4. Gateway validates the JWT on every subsequent request
5. Validated token + claims are forwarded to downstream services

---

## JWT Token Structure

```json
{
  "sub": "47cbc9d411504e2c9e49ac861abc04ad",
  "email": "admin@example.com",
  "role": "admin",
  "tenant_id": "tnt_abc123",
  "exp": 1776000619,
  "iat": 1775997019
}
```

Security Features

Edge Validation: JWT checked at Gateway before routing
Short-lived tokens: Default expiry 60 minutes
RBAC: Role-based access control (Admin, Manager, Analyst, Viewer)
Tenant Isolation: Enforced using tenant_id claim
No shared secrets between services (Gateway validates once)

Best Practices

Always use HTTPS in production
Store tokens securely (HttpOnly + Secure cookies recommended)
Implement token refresh mechanism
Log out by deleting token on client side (optional server-side blacklist in future)

Future Enhancements

Multi-Factor Authentication (MFA)
Social login (Google, Microsoft)
SSO for enterprise customers
Token revocation & blacklist
