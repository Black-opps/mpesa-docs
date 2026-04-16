# payment-service

# Payment Service API Documentation 💰

**Service Name**: Payment Service  
**Port**: 8007  
**Responsibility**: Handles all M-PESA transactions via Daraja API.

---

## Overview

The Payment Service is responsible for initiating, processing, and tracking all M-PESA payments (STK Push, C2B, B2C, etc.). It publishes successful transactions to Kafka for downstream processing.

---

## Key Endpoints

### STK Push (Lipa na M-PESA)

**POST** `/api/v1/payments/stkpush`

Initiates a payment request from customer phone.

**Request Body:**

```json
{
  "tenant_id": "tnt_abc123",
  "phone_number": "254712345678",
  "amount": 1500.0,
  "account_reference": "INV-001",
  "transaction_desc": "Subscription payment"
}
```

Transaction Status
GET /api/v1/payments/status/{checkout_request_id}
Check status of a previous STK Push.

Callback Webhook
POST /api/v1/payments/callback
M-PESA Daraja callback endpoint (public, secured by signature validation).

Integration Features

Automatic retry logic for failed requests
Transaction reconciliation
Event publishing to Kafka (mpesa.transactions.success)
Comprehensive logging and audit trail
Support for B2C (Business to Customer) disbursements

Security

All endpoints (except callback) require valid JWT
Callback secured via M-PESA signature validation
Sensitive data (shortcode, passkey) stored in environment variables

Future Enhancements

Bulk payment support
Payment links generation
Integration with more payment providers
Advanced fraud detection
