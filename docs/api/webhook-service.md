---

### 2. `docs/api/webhook-service.md`

```markdown
# Webhook Service API Documentation 🔗

**Service Name**: Webhook Service  
**Port**: 8010  
**Responsibility**: Reliable delivery of events and notifications to external systems and users.

---

## Overview

The Webhook Service handles all outgoing notifications, callbacks, and integrations with third-party systems. It ensures reliable delivery even if the destination is temporarily unavailable.

---

## Key Endpoints

### Register Webhook

**POST** `/api/v1/webhooks`

Register a new webhook endpoint for a tenant.

**Request Body**:

```json
{
  "tenant_id": "tnt_abc123",
  "url": "https://yourapp.com/webhooks/mpesa",
  "events": ["payment.success", "transaction.categorized"],
  "secret": "whsec_..."
}
```

Manual Trigger (for testing)
POST /api/v1/webhooks/trigger
Manually trigger a webhook event.

Supported Events

payment.success
payment.failed
transaction.categorized
subscription.renewed
statement.processed
low.balance.alert

Reliability Features

Retry Mechanism with exponential backoff
Dead Letter Queue for failed deliveries
Signature Validation (HMAC)
Event Versioning
Delivery Logs & Monitoring

Security

Webhook endpoints are validated per tenant
Payloads are signed with tenant-specific secret
Rate limiting on webhook deliveries
IP whitelisting option (future)

Integration Example
External system receives:
JSON{
"event": "payment.success",
"timestamp": "2026-04-15T10:23:45Z",
"data": {
"transaction_id": "TXN001",
"amount": 2500.00,
"phone_number": "254712345678"
}
}

Future Enhancements

Webhook management dashboard
Bulk event replay
Integration templates (Zapier, Make.com)
Advanced filtering and transformations
