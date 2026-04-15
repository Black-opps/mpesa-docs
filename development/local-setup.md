# local-setup

# Local Development Setup 🛠

Follow these steps to run the entire M-PESA Analytics platform locally.

---

## Prerequisites

- Python 3.12+
- Node.js 18+ (for dashboard)
- Docker & Docker Compose
- Git

---

## Step 1: Clone Repositories

```bash
mkdir mpesa-platform && cd mpesa-platform

# Clone main repositories
git clone https://github.com/Black-opps/gateway-service.git
git clone https://github.com/Black-opps/auth-service.git
git clone https://github.com/Black-opps/tenant-service.git
git clone https://github.com/Black-opps/analytics-service.git
git clone https://github.com/Black-opps/payment-service.git
# ... clone other services
```

Step 2: Start Infrastructure

docker-compose up -d postgres redis kafka

Step 3: Run Services
Each service has its own folder. Example:

# Terminal 1 - Gateway

cd gateway-service
uvicorn src.main:app --reload --port 9000

# Terminal 2 - Auth Service

cd auth-service
uvicorn src.main:app --reload --port 8001

# Terminal 3 - Analytics Service

cd analytics-service
uvicorn src.main:app --reload --port 8000

Step 4: Run Dashboard (Frontend)
Bashcd dashboard
npm install
npm run dev
