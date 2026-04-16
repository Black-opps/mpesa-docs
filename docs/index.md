# M-PESA Analytics Platform

## Enterprise SaaS for Financial Intelligence

<div class="grid cards" markdown>

- :material-microservices: **11 Production Microservices**

  ***

  Distributed architecture with API Gateway, auth, tenant isolation, analytics pipeline, and event-driven messaging. Built for scale.

- :material-gateway: **Enterprise API Gateway**

  ***

  JWT edge validation · Rate limiting · Circuit breakers · Distributed tracing · BFF pattern · Prometheus metrics

- :material-cloud-check: **Multi-Cloud Certified**

  ***

  4x Oracle Certified · 5x AWS Badges · Docker · Kubernetes-ready · Production-grade

</div>

---

## System Architecture

```mermaid
flowchart TD
    subgraph Frontend["🎨 Frontend Layer"]
        Dashboard["React Dashboard<br>Port: 3000"]
    end

    subgraph Gateway["⚡ Edge / Gateway Layer"]
        API["API Gateway<br>Port: 9000<br>━━━━━━━━━━━━<br>✓ JWT Validation<br>✓ Rate Limiting<br>✓ Circuit Breakers<br>✓ Distributed Tracing"]
    end

    subgraph Core["🔐 Core Identity Layer"]
        Auth["Auth Service<br>Port: 8001<br>━━━━━━<br>JWT Issuance<br>User Management"]
        Tenant["Tenant Service<br>Port: 8002<br>━━━━━━<br>Org Isolation<br>Member Roles"]
    end

    subgraph Analytics["📊 Analytics Platform Layer"]
        AnalyticsAPI["Analytics Service<br>Port: 8000<br>━━━━━━━━━━━<br>Aggregations<br>Reports & Insights"]
        Parser["Parser Service<br>Port: 8004<br>━━━━━━<br>Statement Ingestion<br>Data Normalization"]
        Categorizer["Categorizer<br>Port: 8009<br>━━━━━━<br>ML Classification<br>Rule Engine"]
        Cashflow["Cashflow Service<br>Port: 8005<br>━━━━━━<br>Trend Detection<br>Forecasting"]
    end

    subgraph Biz["💰 Billing & Integrations Layer"]
        Billing["Billing Service<br>Port: 8008<br>━━━━━━<br>Subscriptions<br>Invoicing"]
        Payment["Payment Service<br>M-PESA Daraja<br>━━━━━━<br>STK Push<br>Callbacks"]
        Webhook["Webhook Service<br>Port: 8010<br>━━━━━━<br>Event Delivery<br>Integrations"]
    end

    Dashboard --> API
    API --> Auth
    API --> Tenant
    API --> AnalyticsAPI
    API --> Billing
    API --> Webhook

    AnalyticsAPI --> Parser
    AnalyticsAPI --> Categorizer
    AnalyticsAPI --> Cashflow

    Billing --> Payment
    Webhook --> Payment

    style API fill:#4ade80,stroke:#166534,stroke-width:3px,color:#000
    style Dashboard fill:#60a5fa,stroke:#1e40af,color:#000
    style Payment fill:#f87171,stroke:#991b1b,color:#000
```
