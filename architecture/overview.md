# Architecture Overview 🏗️

High-level design of the **M-PESA Analytics SaaS Platform** — a modern, scalable, 11-microservice fintech system.

---

## High-Level System Architecture

```mermaid
flowchart TD
    subgraph "Frontend Layer"
        Dashboard[React Dashboard<br>Port: 3000]
    end

    subgraph "API Gateway Layer<br>(FastAPI - Port 9000)"
        Gateway[Enterprise API Gateway<br>JWT Validation + Circuit Breaker<br>Rate Limiting + Tracing + BFF]
    end

    subgraph "Microservices Layer"
        Auth[🔐 Auth Service<br>Port: 8001]
        Tenant[👥 Tenant Service<br>Port: 8002]
        Payment[💰 Payment Service<br>M-PESA Daraja<br>Port: 8007]
        Billing[🧾 Billing Service<br>Port: 8008]
        Parser[📄 Parser Service<br>Port: 8004]
        Categorizer[🏷️ Categorizer Service<br>Port: 8009]
        Analytics[📊 Analytics Service<br>Port: 8000]
        Cashflow[💵 Cashflow Intelligence<br>Port: 8005]
        Webhook[🔗 Webhook Service<br>Port: 8010]
    end

    subgraph "Data & Messaging Layer"
        Postgres[(PostgreSQL<br>Multi-tenant)]
        Redis[(Redis Cache)]
        Kafka[(Kafka Event Bus)]
    end

    Dashboard --> Gateway
    Gateway --> Auth
    Gateway --> Tenant
    Gateway --> Payment
    Gateway --> Billing
    Gateway --> Parser
    Gateway --> Categorizer
    Gateway --> Analytics
    Gateway --> Cashflow
    Gateway --> Webhook

    Parser --> Kafka
    Categorizer --> Kafka
    Payment --> Kafka

    Kafka --> Analytics
    Kafka --> Cashflow
    Kafka --> Billing
    Kafka --> Webhook

    Analytics --> Postgres
    Cashflow --> Postgres

    style Gateway fill:#4ade80,stroke:#166534,stroke-width:4px
    style Dashboard fill:#60a5fa,stroke:#1e40af
    style Postgres fill:#f87171,stroke:#991b1b
