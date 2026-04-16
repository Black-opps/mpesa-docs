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
Platform Capabilities
=== "🚀 Performance & Scale"

Metric	Value
Gateway Latency	<10ms (p95)
Analytics Aggregation	<500ms
Concurrent Tenants	Unlimited horizontal scale
Target Uptime	99.9%
Request Throughput	10,000+ req/s
=== "🔒 Security & Compliance"

Feature	Implementation
Authentication	JWT with edge validation (Zero-Trust)
Authorization	Role-based (Admin/User/Tenant)
Tenant Isolation	Schema-per-tenant (Pro) / Database-per-tenant (Enterprise)
Secrets Management	Environment variables + vault-ready
API Security	Rate limiting + CORS + input validation
=== "📊 Observability"

Tool	Purpose
Prometheus	Metrics collection (P95 latency, request rates)
Structured Logging	JSON logs with correlation IDs
Distributed Tracing	End-to-end request tracking
Health Checks	/health endpoints for all 11 services
Grafana	Dashboards (optional)
=== "☁️ Deployment Targets"

Environment	Method
Local Development	Docker Compose
Staging	Kubernetes (minikube/k3s)
Production	Cloud (OCI/AWS/Azure)
CI/CD	GitHub Actions
Container Registry	Docker Hub / GHCR
Quick Start
=== "🐳 Docker Compose (Recommended)"

bash
# Clone the platform
git clone https://github.com/Black-opps/mpesa-analytics-api.git
cd mpesa-analytics-api

# Start all 11 services
docker-compose up -d

# Verify services
docker-compose ps

# Access the platform
# Dashboard: http://localhost:3000
# Gateway API: http://localhost:9000/docs
=== "🐍 Local Development"

bash
# Analytics Service
cd mpesa-analytics-api
python -m venv venv
source venv/bin/activate  # Windows: .\venv\Scripts\Activate
pip install -r requirements.txt
uvicorn src.main:app --reload --port 8000

# Auth Service (new terminal)
cd ../mpesa-auth-service
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn src.main:app --reload --port 8001

# Gateway (new terminal)
cd ../mpesa-api-gateway
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn src.main:app --reload --port 9000
=== "☸️ Kubernetes"

bash
# Apply all configurations
kubectl apply -f k8s/

# Check deployment status
kubectl get pods -w

# Access via port-forward
kubectl port-forward svc/gateway 9000:9000
Technology Stack
<div class="grid cards" markdown>
API Layer

FastAPI (Python 3.12)

Pydantic v2

Async/await

WebSocket support

Data Layer

PostgreSQL (multi-tenant)

Redis (caching + rate limiting)

Alembic (migrations)

SQLAlchemy 2.0+

Message Bus

Apache Kafka

Event-driven architecture

Async decoupling

At-least-once delivery

Frontend

React 19

TypeScript

Material-UI v6

Recharts (visualizations)

Container & Orchestration

Docker (multi-stage builds)

Docker Compose

Kubernetes (Pod/Service/Ingress)

Helm charts (optional)

Monitoring

Prometheus client

Structured logging

Health check endpoints

Circuit breaker metrics

</div>
Service Matrix
Service	Port	Purpose	Tech Stack	Status
API Gateway	9000	Edge routing, auth, rate limiting, circuit breakers	FastAPI + Prometheus	✅ Production
Auth Service	8001	JWT issuance, user management, roles	FastAPI + JWT + bcrypt	✅ Production
Tenant Service	8002	Organization isolation, member roles	FastAPI + PostgreSQL	✅ Production
Analytics Service	8000	Aggregations, reports, insights, KPIs	FastAPI + SQLAlchemy	✅ Production
Parser Service	8004	Statement ingestion, data normalization	FastAPI + CSV/PDF	✅ Production
Categorizer Service	8009	ML classification, rule engine	FastAPI + Pattern matching	✅ Production
Cashflow Service	8005	Trend detection, forecasting, insights	FastAPI + Pandas	✅ Production
Billing Service	8008	Subscriptions, invoicing, payments	FastAPI + PostgreSQL	✅ Production
Payment Service	8007	M-PESA Daraja integration, STK Push	FastAPI + Daraja API	✅ Production
Webhook Service	8010	Event delivery, external integrations	FastAPI + Kafka	✅ Production
React Dashboard	3000	Tenant UI, analytics views, admin panel	React 19 + TypeScript + MUI	✅ Production
Certifications & Badges
<div class="grid cards" markdown>
Oracle Cloud (OCI)

✅ Generative AI Professional (2025-2027)

✅ Multicloud Architect Professional (2025-2027)

✅ Data Science Professional (2025-2027)

✅ AI Foundations Associate (2025-2027)

Amazon Web Services (AWS)

✅ Solutions Architect (Fundamentals) — Mar 2026

✅ Introduction to Cloud 101 — Dec 2025

✅ Machine Learning Foundations — Nov 2025

✅ Introduction to Generative AI — Nov 2025

Other Certifications

✅ Python Essentials 1 (Cisco) — Jan 2026-2036

</div>
Why This Platform Exists
Most small and medium businesses using M-PESA lack structured, tenant-aware analytics tools. This platform demonstrates how a production-scale fintech analytics backend can be designed using:

11 microservices with clear boundaries

API Gateway pattern with edge authentication

Tenant isolation for multi-org SaaS

Event-driven architecture with Kafka

Analytics pipelines for financial intelligence

ML-assisted categorization for transaction data

Cashflow forecasting for business insights

This is directly applicable to SaaS platforms, embedded finance, and fintech analytics roles.

Documentation Sections
<div class="grid cards" markdown>
:material-architecture: Architecture →

System design, data flow, deployment strategy, and Kafka events

:material-api: API Reference →

Complete API documentation for all 11 services with examples

:material-docker: Deployment →

Docker, Docker Compose, Kubernetes, and cloud deployment guides

:material-security: Security →

Authentication, multi-tenancy, compliance, and secrets management

:material-developer-board: Development →

Local setup, environment variables, and contributing guide

:material-chart-line: Roadmap →

Future plans, milestones, and upcoming features

</div>
Built with passion for African fintech innovation 🇰🇪

Last Updated: April 16, 2026
Version: 1.0
Maintainer: Jonathan Wambugu
License: MIT
```
