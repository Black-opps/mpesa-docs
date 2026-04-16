# uploading-statements

# Uploading M-PESA Statements 📤

Learn how to upload your M-PESA transaction history into the platform.

---

## Supported Formats

- M-PESA PDF statements (official)
- M-PESA CSV exports
- Excel files (.xlsx)

---

## How to Upload

1. Go to **Transactions** tab in the dashboard
2. Click **"Upload Statement"**
3. Select your M-PESA statement file
4. Click **Upload**

The file is sent to the **Parser Service**, which:

- Extracts transactions
- Sends them to the **Categorizer Service**
- Stores categorized data in your tenant database

Processing usually takes **10–30 seconds**.

---

## What Happens After Upload

- Transactions appear in the **Transactions** list
- Summary numbers update automatically
- Insights & Cashflow charts are recalculated
- You receive a notification when processing is complete

---

## Tips for Best Results

- Use official M-PESA PDF statements when possible
- Upload one month at a time for faster processing
- Make sure the PDF is not password protected
- For large statements (>500 transactions), processing may take longer

---

## Troubleshooting

- **"File too large"** → Split into smaller PDFs
- **"Failed to parse"** → Try CSV export instead
- **No transactions appear** → Check the upload history for errors

---

**Need help?** Contact support or open a ticket.
