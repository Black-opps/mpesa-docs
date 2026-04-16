# Architecture Overview 🏗️

High-level design of the M-PESA Analytics SaaS Platform — a modern, scalable, 11-microservice fintech system.

## System Architecture Diagram

```mermaid
flowchart TD
    subgraph Frontend["🎨 Frontend Layer"]
        Dashboard["React Dashboard<br/>Port: 3000"]
    end

    subgraph Gateway["⚡ API Gateway Layer (FastAPI - Port 9000)"]
        API["Enterprise API Gateway<br/>━━━━━━━━━━━━━━━━━━━<br/>✓ JWT Validation<br/>✓ Circuit Breaker<br/>✓ Rate Limiting<br/>✓ Distributed Tracing<br/>✓ BFF Pattern"]
    end

    subgraph Services["🔧 Microservices Layer"]
        Auth["🔐 Auth Service<br/>Port: 8001"]
        Tenant["👥 Tenant Service<br/>Port: 8002"]
        Payment["💰 Payment Service<br/>M-PESA Daraja<br/>Port: 8007"]
        Billing["🧾 Billing Service<br/>Port: 8008"]
        Parser["📄 Parser Service<br/>Port: 8004"]
        Categorizer["🏷️ Categorizer Service<br/>Port: 8009"]
        Analytics["📊 Analytics Service<br/>Port: 8000"]
        Cashflow["💵 Cashflow Intelligence<br/>Port: 8005"]
        Webhook["🔗 Webhook Service<br/>Port: 8010"]
    end

    subgraph Data["🗄️ Data & Messaging Layer"]
        Postgres[(PostgreSQL<br/>Multi-tenant)]
        Redis[(Redis Cache)]
        Kafka[(Kafka Event Bus)]
    end

    Dashboard --> API
    API --> Auth
    API --> Tenant
    API --> Payment
    API --> Billing
    API --> Parser
    API --> Categorizer
    API --> Analytics
    API --> Cashflow
    API --> Webhook

    Parser --> Kafka
    Categorizer --> Kafka
    Analytics --> Postgres
    Cashflow --> Postgres
    Webhook --> Kafka

    style API fill:#4ade80,stroke:#166534,stroke-width:3px,color:#000
    style Dashboard fill:#60a5fa,stroke:#1e40af,color:#000
    style Postgres fill:#f87171,stroke:#991b1b,color:#000
