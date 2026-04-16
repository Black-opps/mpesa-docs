---

### 2. `docs/api/cashflow-service.md`

```markdown
# Cashflow Intelligence Service API Documentation 💵

**Service Name**: Cashflow Service  
**Port**: 8005  
**Responsibility**: Advanced cashflow analysis, forecasting, and financial intelligence.

---

## Overview

The Cashflow Service provides deep insights into money movement patterns, trends, and predictions based on categorized transactions.

---

## Key Endpoints

**GET** `/api/v1/cashflow/summary/{tenant_id}`  
Overall cashflow health.

**POST** `/api/v1/cashflow/analyze`  
Deep analysis of cashflow patterns.

**GET** `/api/v1/cashflow/daily`  
Daily inflow/outflow trends.

**GET** `/api/v1/cashflow/forecast`  
Future cashflow predictions (coming soon).

---

## Core Features

- Inflow vs Outflow analysis
- Weekly/Monthly trend detection
- Seasonality identification
- Cashflow forecasting (ML-based)
- Burn rate calculation
- Liquidity insights

---

## Integration

- Consumes categorized transactions from Kafka
- Works closely with Analytics Service
- Feeds insights to the Dashboard BFF

---

## Future Roadmap

- Predictive cashflow modeling
- Scenario planning ("What if" analysis)
- Automated alerts for negative cashflow
- Integration with accounting software
