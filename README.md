# Nuxt CRUD Frontend Template

## A dynamic CRUD frontend template built with Nuxt 3.

This template connects to any backend exposing REST APIs. It is backend-agnostic, so you can connect it to your own custom API, Strapi, Supabase, or any other service exposing standard CRUD endpoints.

This project is designed for friends and freelancers who want to focus on frontend development while using ready-made CRUD APIs.

## Features

Dynamic table and form generation based on backend schema.

Supports all basic CRUD operations: Create, Read, Update, Delete.

Date fields automatically displayed in local timezone.

Easily extendable with new resources.

Configurable navigation via data/nav.json.

## Getting Started

### 1. Create a repo from this template

Use this template to create your own repository (recommended for starting a new project):

Nuxt CRUD Frontend Template [https://github.com/clifordpereira/nuxt-crud-frontend]

or clone this repo and change the remote URL to your new repo:

````bash
git clone https://github.com/clifordpereira/nuxt-crud-frontend.git
git remote set-url origin <YOUR_NEW_REPO_URL>
```bash

### 2. Install dependencies

```bash
cd nuxt-crud-frontend
npm install
````

### 3. Configure the backend API

Set the backend API URL in .env:

```bash
NUXT_PUBLIC_CRUD_BASE_URL="http://localhost:3000/api"
```

The API must expose CRUD endpoints like:

```bash
GET    /api/:resource
POST   /api/:resource
PATCH  /api/:resource/:id
DELETE /api/:resource/:id
```

The frontend works with any backend that follows this structure.

### 4. Start the frontend

```bash
npm run dev
```

Visit: http://localhost:3001

### 5. Test CRUD operations

Navigate to Users (or any other resource configured in data/nav.json).

Add new items using the Add New form.

View, edit, or delete items using the action buttons on the rightmost column.

### 6. Adding new resources

Open data/nav.json.

Add a new resource entry:

```bash
[
  {
    "label": "Home",
    "to": "/",
    "icon": "i-lucide-home"
  },
  {
    "label": "Users",
    "to": "/resource/users",
    "icon": "i-lucide-users"
  },
  {
    "label": "Products",
    "to": "/resource/products",
    "icon": "i-lucide-box"
  }
]
```

/resource is reserved for testing dynamic CRUD resources.

For any new resource, contact the project owner to create the schema in the backend.

### 7. Schema guidance

The frontend reads schema definitions from the API dynamically.

Example fields: string, number, boolean, date.

Dates are displayed in local time, numbers and booleans are handled automatically.

### 8. For frontend developers (React/Angular/others)

This is frontend framework agnostic.

You can create a new frontend using React, Angular, or any framework and connect it to the same backend.

The backend exposes standard REST CRUD endpoints.

Date formatting (UTC → local) and validation are recommended for new frontends.

### 9. Support & collaboration

This template is initially aimed at friends helping in frontend development.

You can customize navigation (nav.json) and forms.

Contact the project owner to create backend schemas for testing or development.

### 10. License

MIT License — free to use and modify.
