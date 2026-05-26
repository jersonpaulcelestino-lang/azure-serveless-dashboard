# Azure Serverless Dashboard

Cloud-native serverless dashboard built on Microsoft Azure using Azure Functions, Python, Azure Table Storage, and a static frontend.

## Overview

This project demonstrates a complete serverless architecture on Azure.

The application allows users to:
- View transaction records
- Create new transactions
- Store data in Azure Table Storage
- Consume REST APIs from a frontend dashboard
- Deploy automatically using GitHub Actions CI/CD

---

## Architecture

Frontend (Azure Static Web App)->Azure Functions REST API (Python)->Azure Table Storage

---

## Technologies Use

### Cloud Services
- Azure Functions
- Azure Table Storage
- Azure Storage Account
- Azure Static Web Apps

### Backend
- Python 3.11
- Azure Functions SDK
- REST API

### Frontend
- HTML5
- CSS3
- Bootstrap 5
- JavaScript

### DevOps / CI-CD
- GitHub Actions
- GitHub Repository Integration

---

## Features

- Serverless backend architecture
- REST API endpoints
- Dynamic transaction dashboard
- Azure Table Storage integration
- Create and retrieve transactions
- Real-time frontend updates
- Responsive UI with Bootstrap
- Automated cloud deployment

---

## API Endpoints

### Get Transactions

```http
GET /api/ProcessTransactions
```

Example response:

```json
[
  {
    "status": "success",
    "amount": 250
  },
  {
    "status": "failed",
    "amount": 100
  }
]
```

---

### Create Transaction

```http
POST /api/CreateTransaction
```

Request body:

```json
{
  "status": "success",
  "amount": 500
}
```

---

## Local Development

### Backend

```bash
cd backend

pip install -r requirements.txt

func start
```

### Frontend

Open `index.html` in your browser.

---

## Deployment

### Backend Deployment

Azure Functions deployment using GitHub Actions.

### Frontend Deployment

Azure Static Web Apps connected to GitHub repository.

---

## Project Goals

This project was created to demonstrate practical experience with:

- Serverless Computing
- Cloud-native Architecture
- Azure Services
- REST API Development
- CI/CD Pipelines
- Frontend and Backend Integration
- Cloud Deployment Automation

---


## Author

Jerson Paul Celestino