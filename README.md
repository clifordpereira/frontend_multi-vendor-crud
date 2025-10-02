# Nuxt CRUD Frontend Template

## A dynamic CRUD frontend template built with Nuxt 3

This template connects to any backend exposing REST APIs. It is backend-agnostic, so you can connect it to your own custom API, Strapi, Supabase, or any other service exposing standard CRUD endpoints.

This project is designed for friends and freelancers who want to focus on frontend development while using ready-made CRUD APIs.

Demo / Showcase

[Video walkthrough](https://www.youtube.com/watch?v=AfKlsVmiMVo)

## Features

Dynamic table and form generation based on backend schema.

Supports all basic CRUD operations: Create, Read, Update, Delete.

Date fields automatically displayed in local timezone.

Easily extendable with new resources.

## Getting Started

### 1. Create a repo from this template

clone this repo

```bash
git clone https://github.com/clifordpereira/frontend_multi-vendor-crud.git
```

### 2. Install dependencies

```bash
cd frontend_multi-vendor-crud
npm install
```

### 3. Configure the backend API

Set the backend API URL in .env:

Example:

```bash
NUXT_PUBLIC_CRUD_BASE_URL="http://localhost:3000/api"
```

The backend API must expose CRUD endpoints like:

```bash
| Method | Endpoint             | Description                     |
| ------ | -------------------- | ------------------------------- |
| GET    | `/api/:resource`     | Fetch all records of a resource |
| GET    | `/api/:resource/:id` | Fetch a single record by ID     |
| POST   | `/api/:resource`     | Create a new record             |
| PUT    | `/api/:resource/:id` | Update an existing record       |
| DELETE | `/api/:resource/:id` | Delete a record by ID           |
```

The frontend works with any backend that follows this structure.

### 4. Start the frontend

```bash
npm run dev
```

Visit: http://localhost:3001 (Assuming backend API is running on http://localhost:3000)

### 5. Schema guidance

The frontend reads schema definitions from the API dynamically.

Example fields: string, number, boolean, date.

Dates are displayed in local time, numbers and booleans are handled automatically.

### 6. Customization

Modify navigation via nav.json

Customize forms, tables, and pages as needed

### 7. License

MIT License — free to use and modify.
