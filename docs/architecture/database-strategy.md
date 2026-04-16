# database-strategy

---

### 3. `docs/architecture/database-strategy.md`

```markdown
# Database Strategy 🗄️

Multi-tenancy and data architecture decisions.

---

## Strategy Overview

We use a **hybrid multi-tenancy model** that balances cost, performance, and isolation.

---

## Isolation Levels by Plan

| Plan           | Strategy            | Implementation                     | Use Case              |
| -------------- | ------------------- | ---------------------------------- | --------------------- |
| Free / Starter | Row-level filtering | Single DB + `tenant_id` column     | Testing & small users |
| Pro            | Schema per Tenant   | One schema per tenant in shared DB | Most customers        |
| Enterprise     | Dedicated Database  | Separate PostgreSQL database       | Large organizations   |

---

## Technical Implementation

- **Row-level**: Queries always filter by `tenant_id`
- **Schema-per-Tenant**: Dynamic schema creation on tenant onboarding
- **Database-per-Tenant**: Automated provisioning for Enterprise

---

## Benefits

- Strong isolation for sensitive financial data
- Cost-effective scaling
- Easy backup/restore per tenant
- Simple migration between tiers

---

## Current Databases

- **Main Analytics DB**: PostgreSQL with multi-tenant schemas
- **Event Store**: Kafka (for audit & replayability)
- **Cache**: Redis (sessions, rate limits, temporary data)

---

## Future Enhancements

- Automated tenant migration between isolation levels
- Read replicas for analytics-heavy tenants
- Sharding strategy for very large deployments
- Data archiving & retention policies

---

**Goal**: Maximum data security while maintaining operational simplicity and cost efficiency.
```
