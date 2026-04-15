# dashboard

---

### 2. `docs/user-guide/dashboard.md`

```markdown
# Dashboard User Guide 📊

Welcome to the M-PESA Analytics Dashboard.

---

## Getting Started

1. Go to `http://localhost:3000`
2. Login with your credentials
3. You will land on the **Overview** page

---

## Main Sections

### 1. Overview Dashboard

- Total transactions
- Total volume (KES)
- Average transaction value
- Active days this month

### 2. Transactions

- Full list of all your M-PESA transactions
- Search and filter by date, amount, type, counterparty
- Export to CSV

### 3. Customers

- Unique counterparties (senders/receivers)
- Top customers by volume
- Customer transaction history

### 4. Insights

- AI-powered observations
- Spending patterns
- Large transaction alerts
- Recommendations

### 5. Cashflow

- Daily/weekly/monthly cashflow trends
- Inflow vs Outflow charts

---

## How to Upload Statements

1. Go to **Transactions** → **Upload Statement**
2. Upload your M-PESA PDF or CSV statement
3. Processing happens in background via Parser + Categorizer services
4. Data appears in dashboard within seconds

---

## Keyboard Shortcuts

- `Ctrl/Cmd + K` → Global search
- `Ctrl/Cmd + R` → Refresh data
- `Esc` → Close modals

---

**Tip**: All data is isolated per tenant. You only see your own organization’s data.
```
