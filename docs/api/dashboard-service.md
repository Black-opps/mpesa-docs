# Dashboard Service (API Gateway + BFF) 📟

**Service Name**: Dashboard Service / API Gateway  
**Port**: 9000  
**Role**: Backend-for-Frontend (BFF) + Enterprise API Gateway

---

## Purpose

Acts as the **single entry point** for the React Dashboard and all external clients. Combines API Gateway and BFF responsibilities.

---

## Key Responsibilities

- Zero-trust JWT authentication at the edge
- Intelligent request routing to microservices
- Data aggregation for dashboard views
- Circuit breaker and resilience patterns
- Rate limiting and tenant isolation
- Request/response transformation

---

## Architecture Pattern

**API Gateway** + **Backend for Frontend (BFF)** hybrid:

- Gateway handles auth, security, routing
- BFF aggregates data from multiple services for frontend efficiency

---

## Core Features

- Parallel async calls for dashboard overview
- Request tracing with correlation IDs
- Smart timeout propagation
- Comprehensive metrics and monitoring
- Service discovery abstraction

---

## Future Enhancements

- GraphQL support
- Real-time updates via WebSockets
- Advanced caching layer
- Canary deployments
