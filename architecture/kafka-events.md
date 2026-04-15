# Kafka Event Schemas 📡

This document defines all major events published and consumed across the M-PESA Analytics Platform.

Kafka is the **backbone** for asynchronous communication between services.

---

## Event Naming Convention

**Format**: `domain.event.action.version`

Examples:

- `transaction.raw.created.v1`
- `payment.success.v1`
- `subscription.updated.v1`

---

## Core Events

### 1. Transaction Events

#### `transaction.raw.created.v1`

**Published by**: Parser Service  
**Consumed by**: Categorizer Service

```json
{
  "event": "transaction.raw.created.v1",
  "timestamp": "2026-04-15T14:23:45Z",
  "tenant_id": "tnt_abc123",
  "payload": {
    "transaction_id": "TXN-987654",
    "phone_number": "254712345678",
    "amount": 2500.0,
    "transaction_type": "send_money",
    "counterparty": "254798765432",
    "description": "Payment to John Doe",
    "timestamp": "2026-04-15T14:22:10Z",
    "reference": "MPESA-123456"
  }
}
```

transaction.categorized.v1
Published by: Categorizer Service
Consumed by: Analytics Service, Cashflow Service, Billing Service
JSON{
"event": "transaction.categorized.v1",
"timestamp": "2026-04-15T14:23:52Z",
"tenant_id": "tnt_abc123",
"payload": {
"transaction_id": "TXN-987654",
"category": "Revenue",
"confidence": 0.95,
"rules_applied": ["salary_pattern", "mpesa_from"],
"amount": 2500.00,
"transaction_type": "send_money"
}
}

2. Payment Events
   payment.success.v1
   Published by: Payment Service
   Consumed by: Analytics, Billing, Webhook
   JSON{
   "event": "payment.success.v1",
   "timestamp": "2026-04-15T14:25:10Z",
   "tenant_id": "tnt_abc123",
   "payload": {
   "checkout_request_id": "ws_CO_123456789",
   "merchant_request_id": "MR_987654",
   "amount": 1500.00,
   "phone_number": "254712345678",
   "receipt_number": "RMP12345678",
   "transaction_date": "2026-04-15T14:25:05Z"
   }
   }

3. Subscription & Billing Events
   subscription.updated.v1
   Published by: Billing Service
   JSON{
   "event": "subscription.updated.v1",
   "timestamp": "2026-04-15T10:00:00Z",
   "tenant_id": "tnt_abc123",
   "payload": {
   "old_plan": "pro",
   "new_plan": "enterprise",
   "effective_date": "2026-04-15T10:00:00Z",
   "status": "active"
   }
   }

4. Webhook Events
   webhook.delivery.attempt.v1
   Published by: Webhook Service
   JSON{
   "event": "webhook.delivery.attempt.v1",
   "timestamp": "2026-04-15T14:30:00Z",
   "payload": {
   "webhook_id": "wh_123",
   "event_type": "payment.success",
   "target_url": "https://client.com/webhooks",
   "attempt": 2,
   "status": "success"
   }
   }

Kafka Topics Summary

TopicProducerConsumersRetentionraw-transactionsParserCategorizer7 dayscategorized-transactionsCategorizerAnalytics, Cashflow, Billing30 dayspaymentsPaymentAnalytics, Billing, Webhook90 dayssubscriptionsBillingWebhook, Analytics90 dayswebhook-eventsWebhookMonitoring14 days

Schema Evolution Strategy

Use versioned event names (v1, v2)
Maintain backward compatibility
Use Avro / JSON Schema in future for strict validation

Last Updated: April 15, 2026
Version: 1.0
