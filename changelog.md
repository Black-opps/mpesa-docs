# changelog

---

### 3. `changelog.md`

```markdown
# Changelog 📋

All notable changes to the M-PESA Analytics Platform will be documented here.

---

## [Unreleased]

### Added

- Dedicated login proxy route in Gateway
- Improved header forwarding for Authorization
- Enhanced CORS configuration
- Verbose proxy logging for debugging

### Changed

- Updated analytics routes to use JWT `current_user`
- Simplified tenant_id handling via JWT claims

---

## [v0.9.0] - 2026-04-14

### Added

- Full 11-microservice architecture
- API Gateway with circuit breaker + rate limiting
- M-PESA Daraja integration (STK Push + Callbacks)
- Transaction parser + categorizer service
- Basic React dashboard skeleton
- GitHub Actions CI/CD pipelines

### Changed

- Migrated from monolithic to microservices
- Switched to schema-per-tenant strategy

### Fixed

- Pydantic v2 compatibility issues
- JWT token validation across services

---

## [v0.1.0] - 2026-03-01

### Added

- Initial project scaffolding
- FastAPI template for services
- Basic auth service with JWT
- SQLite support for local development

---

**Format**: Follows [Keep a Changelog](https://keepachangelog.com/)
```
