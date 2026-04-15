# overview

# Architecture Overview 🏗️

High-level design of the **M-PESA Analytics SaaS Platform** — a modern, scalable, 11-microservice fintech system.

---

## System Architecture Diagram

````mermaid
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
    Gateway --> Auth & Tenant & Payment & Billing & Parser & Categorizer & Analytics & Cashflow & Webhook

    Parser --> Kafka
    Categorizer --> Kafka
    Analytics --> Postgres
    Cashflow --> Postgres
    Webhook --> Kafka

    style Gateway fill:#4ade80,stroke:#166534,stroke-width:4px
    style Dashboard fill:#60a5fa,stroke:#1e40af
    style Postgres fill:#f87171,stroke:#991b1b

# Architecture Overview

## High-Level System Architecture

```mermaid
flowchart TD
    subgraph Frontend
        Dashboard[React Dashboard<br>Port: 3000]
    end

    subgraph "API Gateway<br>(FastAPI - Port 9000)"
        Gateway[Enterprise API Gateway<br>JWT Validation + Circuit Breaker<br>Rate Limiting + Tracing]
    end

    subgraph Microservices
        Auth[🔐 Auth Service<br>Port: 8001]
        Tenant[👥 Tenant Service<br>Port: 8002]
        Payment[💰 Payment Service<br>M-PESA Daraja<br>Port: 8007]
        Billing[🧾 Billing Service<br>Port: 8008]
        Parser[📄 Statement Parser<br>Port: 8004]
        Categorizer[🏷️ Transaction Categorizer<br>Port: 8009]
        Analytics[📊 Analytics Service<br>Port: 8000]
        Cashflow[💵 Cashflow Intelligence<br>Port: 8005]
        Webhook[🔗 Webhook Service<br>Port: 8010]
    end

    subgraph Data
        Postgres[(PostgreSQL<br>Multi-tenant)]
        Redis[(Redis)]
        Kafka[(Kafka)]
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
    Analytics --> Postgres
    Cashflow --> Postgres
    Webhook --> Kafka

    style Gateway fill:#4ade80,stroke:#166534,stroke-width:3px
    style Dashboard fill:#60a5fa,stroke:#1e40af
````

Core Design Principles

Multi-Tenancy First — Strong data isolation (Schema-per-tenant for Pro, Database-per-tenant for Enterprise)
Event-Driven Architecture — Kafka as the backbone for async communication
Zero-Trust Security — JWT validation at the API Gateway edge
Resilience by Design — Circuit breakers, retries, and graceful degradation
Observability — Correlation IDs, structured logging, Prometheus metrics
Scalability — Stateless services + horizontal scaling ready

Data Flow Example (Statement Upload)

User uploads M-PESA statement via Dashboard
Gateway forwards to Parser Service
Parser extracts transactions → publishes to Kafka (raw-transactions)
Categorizer Service consumes, applies rules/ML → publishes categorized events
Analytics Service and Cashflow Service consume and aggregate insights
Dashboard pulls summarized data via Gateway (BFF pattern)

Technology Choices

LayerTechnologyReasonAPI GatewayFastAPIPerformance + asyncBackend ServicesFastAPI + Python 3.12Rapid developmentDatabasePostgreSQLReliability + multi-tenancyCacheRedisSpeedMessagingKafkaEvent-driven decouplingFrontendReact + TypeScriptRich UIDeploymentDocker + Kubernetes-readyPortability

Scalability Strategy

Horizontal scaling of stateless services
Read replicas for analytics
Separate read/write paths where needed
Caching at multiple layers

Last Updated: April 15, 2026
Version: 1.0
