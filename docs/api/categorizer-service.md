# categorizer-service

# Categorizer Service API Documentation 🏷️

**Service Name**: Transaction Categorizer  
**Port**: 8009  
**Responsibility**: Rule-based + ML categorization of M-PESA transactions.

---

## Endpoints

**POST** `/api/v1/categorize` — Categorize batch of transactions  
**POST** `/api/v1/categorize/single` — Categorize single transaction  
**GET** `/api/v1/categorize/rules` — List active categorization rules  
**POST** `/api/v1/categorize/rules` — Add new rule

---

## Core Features

- Keyword + pattern-based rules
- Confidence scoring
- Rule priority system
- Kafka consumer for real-time processing
- Manual override capability

---

## Categories

- Revenue
- Inventory
- Rent
- Salaries
- Transport
- Utilities
- Other

---

**Future**: Machine Learning model for auto-categorization with higher accuracy.
