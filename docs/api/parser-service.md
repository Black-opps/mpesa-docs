# Parser Service API Documentation 📄

**Service Name**: Statement Parser Service  
**Port**: 8004  
**Responsibility**: Ingesting, parsing, and normalizing raw M-PESA statements into structured transaction data.

---

## Overview

The Parser Service is the **entry point** of the data ingestion pipeline. It accepts raw M-PESA statements uploaded by users, extracts transaction records, cleans the data, and publishes them to Kafka for further processing by the Categorizer Service.

---

## Key Endpoints

### Upload Statement

**POST** `/api/v1/parser/upload`

**Request**: Multipart form data with `file` field.

**Supported Formats**:

- Official M-PESA PDF statements
- M-PESA CSV exports
- Excel (.xlsx) files

**Response**:

```json
{
  "status": "queued",
  "task_id": "parse_7f8d9e2a",
  "transactions_extracted": 342,
  "estimated_time_seconds": 18,
  "message": "File received and queued for processing"
}

Processing Pipeline

File upload → Parser Service
Extract text from PDF/CSV
Clean and normalize data
Publish raw transactions to Kafka
Categorizer Service consumes and categorizes them

Features

Supports official M-PESA PDF statements
Robust error handling for malformed files
Background processing with progress tracking
Duplicate detection
High accuracy parsing engine

Future Enhancements

OCR support for scanned/low-quality PDFs
Bank statement parsing (Equity, KCB, Co-op)
Real-time progress via WebSocket
Bulk upload (multiple files at once)
AI-assisted statement classification
```
