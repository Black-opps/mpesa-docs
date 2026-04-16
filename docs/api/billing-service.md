# billing-service

# Billing Service API Documentation 🧾

**Service Name**: Billing Service  
**Port**: 8008  
**Responsibility**: Subscription management, usage metering, invoicing, and plan enforcement.

---

## Overview

The Billing Service handles everything related to monetization — from plan management to usage tracking and invoice generation.

---

## Key Endpoints

### Plans

**GET** `/api/v1/billing/plans`  
List all available subscription plans.

**POST** `/api/v1/billing/plans`  
Create a new subscription plan (Admin only).

### Subscriptions

**GET** `/api/v1/billing/subscriptions/{tenant_id}`  
Get current subscription status for a tenant.

**POST** `/api/v1/billing/subscriptions/upgrade`  
Upgrade or change subscription tier.

### Usage & Metering

**POST** `/api/v1/billing/usage/record`  
Record usage event (e.g., transactions processed, statements uploaded).

**GET** `/api/v1/billing/usage/{tenant_id}`  
Get current usage statistics and limits.

### Invoices

**GET** `/api/v1/billing/invoices`  
List all invoices for the current tenant.

**GET** `/api/v1/billing/invoices/{invoice_id}/pdf`  
Download invoice as PDF.

---

## Core Features

- Tiered pricing (Free, Pro, Enterprise)
- Usage-based billing
- Automatic invoice generation
- Grace period handling
- Payment status synchronization with Payment Service
- Feature flag enforcement per tier

---

## Integration with Other Services

- Listens to Kafka events from Analytics & Parser services for usage metering
- Notifies Webhook Service on subscription changes
- Integrates with Payment Service for invoice payments

---

## Future Enhancements

- Proration on plan changes
- Usage-based alerts
- Tax compliance (KRA integration)
- Custom enterprise plans
