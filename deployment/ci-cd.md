# ci-cd

# CI/CD Pipeline Guide ⚙️

How the platform uses GitHub Actions for Continuous Integration & Deployment.

---

## Current CI/CD Setup

- **Linting**: Ruff
- **Type Checking**: mypy
- **Testing**: pytest
- **Docker Build**: Multi-stage builds
- **Image Push**: To GitHub Container Registry (GHCR)

---

## Workflow Structure

### 1. CI Pipeline (on every push/PR)

- Code linting
- Type checking
- Unit tests
- Security scanning

### 2. CD Pipeline (on merge to main)

- Build Docker images
- Push to GHCR
- Optional: Deploy to staging/production

---

## Key GitHub Actions Workflows

- `.github/workflows/ci.yml` → Lint & Test
- `.github/workflows/docker-cd.yml` → Build & Push images
- `.github/workflows/deploy.yml` → (Future) Kubernetes deployment

---

## Best Practices

- Use semantic versioning for tags
- Sign Docker images
- Run security scans (Trivy)
- Require passing CI before merging

---

**Next Goal**: Full GitOps deployment with ArgoCD.
