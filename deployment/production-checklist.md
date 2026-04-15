# production-checklist

# Production Deployment Checklist ✅

Use this checklist before going live with the M-PESA Analytics Platform.

---

## Infrastructure

- [ ] Domain name purchased and pointed
- [ ] SSL/TLS certificates (Let’s Encrypt)
- [ ] PostgreSQL configured with backups
- [ ] Redis with persistence enabled
- [ ] Kafka cluster (at least 3 brokers recommended)
- [ ] Sufficient server resources (CPU/RAM)

---

## Security

- [ ] Strong `SECRET_KEY` in production
- [ ] All secrets managed via Docker Secrets / Vault
- [ ] HTTPS enforced everywhere
- [ ] Rate limiting enabled
- [ ] CORS configured for production domains only
- [ ] Audit logging enabled
- [ ] Regular security scans (Trivy, Bandit)

---

## Monitoring & Observability

- [ ] Prometheus + Grafana setup
- [ ] Centralized logging (Loki)
- [ ] Alerting rules configured
- [ ] Uptime monitoring (UptimeRobot / Better Stack)
- [ ] Error tracking (Sentry)

---

## Performance & Reliability

- [ ] Circuit breakers tested
- [ ] Load testing completed
- [ ] Database indexes optimized
- [ ] Caching strategy implemented
- [ ] Backup & restore procedures tested

---

## Compliance & Legal

- [ ] Privacy policy in place
- [ ] Terms of Service
- [ ] Data processing agreements ready
- [ ] KRA compliance considerations addressed

---

## Go-Live Checklist

- [ ] Staging environment tested
- [ ] Beta users onboarded
- [ ] Monitoring dashboards verified
- [ ] Rollback plan ready
- [ ] Team on-call schedule defined

---

**Date**: April 2026  
**Version**: 1.0
