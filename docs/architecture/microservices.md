# microservices

# Microservices Breakdown 🧩

Detailed overview of all 11 microservices in the M-PESA Analytics Platform.

---

## 1. API Gateway (Port 9000)

**Role**: Central entry point and Backend-for-Frontend (BFF)  
**Key Features**: JWT validation, circuit breaker, rate limiting, request tracing, data aggregation  
**Tech**: FastAPI + httpx

---

## 2. Auth Service (Port 8001)

**Role**: User authentication and authorization  
**Key Features**: JWT issuance, login, RBAC, password management  
**Tech**: FastAPI, JWT (PyJWT/jose), SQLAlchemy

---

## 3. Tenant Service (Port 8002)

**Role**: Multi-tenancy management  
**Key Features**: Tenant CRUD, user invitations, feature flags, isolation strategy  
**Tech**: FastAPI, PostgreSQL schemas

---

## 4. Payment Service (Port 8007)

**Role**: M-PESA payment processing  
**Key Features**: STK Push, callbacks, B2C, transaction status, reconciliation  
**Tech**: FastAPI, M-PESA Daraja API

---

## 5. Billing Service (Port 8008)

**Role**: Subscription and invoicing  
**Key Features**: Plans, usage metering, invoices, tier enforcement  
**Tech**: FastAPI, Kafka consumer

---

## 6. Parser Service (Port 8004)

**Role**: Raw statement ingestion  
**Key Features**: PDF/CSV parsing, data cleaning, Kafka publishing  
**Tech**: FastAPI, pdfplumber / pandas

---

## 7. Categorizer Service (Port 8009)

**Role**: Transaction categorization  
**Key Features**: Rule engine, confidence scoring, ML-ready  
**Tech**: FastAPI, Kafka consumer/producer

---

## 8. Analytics Service (Port 8000)

**Role**: Business intelligence & reporting  
**Key Features**: Summaries, trends, customer analytics, insights  
**Tech**: FastAPI, SQLAlchemy

---

## 9. Cashflow Service (Port 8005)

**Role**: Cashflow intelligence  
**Key Features**: Forecasting, trends, liquidity analysis  
**Tech**: FastAPI, advanced queries + ML (future)

---

## 10. Webhook Service (Port 8010)

**Role**: Outbound event delivery  
**Key Features**: Reliable webhook delivery, retries, dead letter queue  
**Tech**: FastAPI, background tasks

---

## 11. Dashboard (React - Port 3000)

**Role**: User interface  
**Key Features**: Modern UI, real-time updates, data visualization  
**Tech**: React + TypeScript + TanStack Query

---

## Communication Pattern

- **Synchronous**: Via API Gateway (HTTP)
- **Asynchronous**: Via Kafka events
- **Internal**: Direct service-to-service only when necessary (rare)
