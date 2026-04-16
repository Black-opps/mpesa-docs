# analytics-service

# Analytics Service API Documentation 📊

**Service Name**: Analytics Service  
**Port**: 8000  
**Responsibility**: Processing, aggregating, and serving business intelligence from transaction data.

---

## Overview

The Analytics Service is the **intelligence engine** of the M-PESA platform. It consumes categorized transactions and provides summaries, insights, trends, and reports to the dashboard.

---

## Endpoints

### Summary Endpoints

**GET** `/api/v1/analytics/summary`

Returns key performance metrics for the current user/tenant.

**Response:**

```json
{
  "total_transactions": 1247,
  "total_amount": 2847500.75,
  "average_transaction": 2283.48,
  "active_days": 28
}
```

GET /api/v1/analytics/customers
Top customers by transaction volume.
GET /api/v1/analytics/insights
AI-style insights and recommendations.
GET /api/v1/analytics/transactions
Paginated list of transactions with filters.

Data Sources

Raw transactions from Parser Service
Categorized data from Categorizer Service
Stored in PostgreSQL with user/tenant isolation

Key Features

Real-time aggregation
Trend analysis (daily, weekly, monthly)
Customer segmentation
Anomaly detection (future)
Export capabilities (CSV, PDF)

Authentication
All endpoints require a valid JWT token passed via:
httpAuthorization: Bearer <token>
The service extracts user_id and tenant_id from the token for data isolation.

Future Enhancements

Advanced ML-powered insights
Predictive cashflow forecasting
Automated report generation
Integration with external accounting tools
