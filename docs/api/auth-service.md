# auth-service

# Auth Service API Documentation 🔑

**Service Name**: Authentication Service  
**Port**: 8001  
**Responsibility**: User authentication, JWT issuance, and RBAC.

---

## Endpoints

**POST** `/api/v1/auth/login` — User login  
**POST** `/api/v1/auth/register` — User registration  
**POST** `/api/v1/auth/refresh` — Refresh access token  
**POST** `/api/v1/auth/logout` — Logout (future)

---

## JWT Claims

- `sub` (user ID)
- `email`
- `role`
- `tenant_id`
- `exp` (expiry)

---

## Security Features

- Password hashing (bcrypt)
- Rate limiting on login
- JWT validation at Gateway
- Role-based access control

---

**Note**: This service issues tokens that are validated by the API Gateway before forwarding to other services.
