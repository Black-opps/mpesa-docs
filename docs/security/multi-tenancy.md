# multi-tenancy

# Multi-Tenancy & Data Isolation 🔒

## Strategy Overview

The platform uses a **hybrid multi-tenancy** approach optimized for performance and security.

---

## Isolation Levels

| Plan             | Isolation Strategy  | Description                                   |
| ---------------- | ------------------- | --------------------------------------------- |
| **Free / Basic** | Row-level security  | Single database, data filtered by `tenant_id` |
| **Pro**          | Schema per Tenant   | Each tenant gets its own schema in shared DB  |
| **Enterprise**   | Database per Tenant | Dedicated database instance                   |

---

## How It Works

- Every request includes `X-Tenant-ID` header (from JWT)
- API Gateway validates tenant access
- Database queries are automatically scoped to the tenant
- Row-level security + schema separation prevents data leakage

---

## Benefits

- Strong data isolation
- Cost effective for small/medium tenants
- Easy scaling for large enterprise customers
- Simple backup & restore per tenant

---

## Security Measures

- Tenant validation at Gateway level
- Foreign key constraints + tenant_id filters
- Audit logging for all cross-tenant access attempts
- Regular security audits

---

## Future Plans

- Automated tenant migration between isolation levels
- Cross-tenant analytics (with explicit permission)
- Advanced data residency options (country-specific)

---

**Goal**: Maximum security with operational simplicity.
