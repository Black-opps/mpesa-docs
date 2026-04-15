# M-PESA Analytics Platform Documentation

Enterprise documentation for the 11-microservice M-PESA Analytics Platform.

## Quick Links

- [Architecture Overview](architecture/overview.md)
- [API Documentation](api/gateway.md)
- [Development Setup](development/local-setup.md)
- [Deployment Guide](deployment/docker.md)
- [Security Guidelines](security/authentication.md)

## Platform Overview

Production-grade SaaS platform for M-PESA transaction analytics with:
- ? API Gateway (CORS, rate limiting, circuit breaker)
- ? Authentication & Authorization (JWT)
- ? Multi-tenant analytics
- ? React Dashboard

## Getting Started

1. [Local Development Setup](development/local-setup.md)
2. [API Authentication](security/authentication.md)
3. [Dashboard Usage](user-guide/dashboard.md)

## Repository Structure

\\\

+-- architecture/     # System design docs
+-- api/             # API documentation
+-- development/     # Setup guides
+-- deployment/      # Deployment strategies
+-- security/        # Security guidelines
+-- user-guide/      # End-user docs
+-- diagrams/        # Architecture diagrams
\\\

## License

MIT
