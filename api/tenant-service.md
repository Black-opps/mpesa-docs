# tenant-service

# Tenant Service API Documentation 👥

**Service Name**: Tenant Service  
**Port**: 8002  
**Responsibility**: Multi-tenancy management, organization CRUD, user roles, and feature flags.

---

## Key Endpoints

**POST** `/api/v1/tenants` — Create new tenant  
**GET** `/api/v1/tenants/{tenant_id}` — Get tenant details  
**PUT** `/api/v1/tenants/{tenant_id}/upgrade` — Change subscription plan  
**POST** `/api/v1/tenants/{tenant_id}/users` — Invite user  
**GET** `/api/v1/tenants/{tenant_id}/usage` — Current usage & limits

---

## Isolation Strategy

- **Pro Plan**: Schema per tenant
- **Enterprise Plan**: Dedicated database

---

## User Roles

- Admin
- Manager
- Analyst
- Viewer

---

## Feature Flags

Per-tenant feature toggles (e.g., advanced analytics, bulk upload, API access).
