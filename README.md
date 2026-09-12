# 👥 User Management Dashboard

<p align="center">
  <a href="https://user-management-dashboard-five-beta.vercel.app/">
    <img src="https://img.shields.io/badge/Live-Demo-2ea44f?style=for-the-badge" alt="Live Demo">
  </a>
  <a href="https://github.com/Neha6383/user-management-dashboard">
    <img src="https://img.shields.io/badge/Source-Code-181717?style=for-the-badge&logo=github&logoColor=white" alt="Source Code">
  </a>
</p>

<p align="center">
  A responsive user management application built with React, Vite and Tailwind CSS,
  featuring CRUD operations, search, filtering, sorting, pagination and form validation.
</p>

---

## 🌐 Live Demo

### 👉 [Open User Management Dashboard](https://user-management-dashboard-five-beta.vercel.app/)

> **Demo note:** This project uses JSONPlaceholder as a mock REST API. Create, update and delete operations are simulated and are not permanently persisted by the API.

---

## 📸 Screenshots

### 📊 Dashboard

<p align="center">
  <img src="./screenshots/dashboard.png"
       alt="User Management Dashboard"
       width="95%">
</p>

### ➕ Add User

<p align="center">
  <img src="./screenshots/add-user.png"
       alt="Add User Modal"
       width="80%">
</p>

### 🔎 Filter Users

<p align="center">
  <img src="./screenshots/filter-modal.png"
       alt="Filter Users Modal"
       width="80%">
</p>

---

## ✨ Features

### 👥 User Management

- View users fetched from a REST API
- Add new users
- Edit existing users
- Delete users
- Responsive user table
- Success notifications
- Error handling

### 🔎 Search, Sort & Filter

Users can be searched by:

- First name
- Last name
- Email
- Department

Additional functionality includes:

- User filtering
- Sorting
- Combined search and filtering
- Ascending and descending sorting
- Client-side data processing

### 📄 Pagination

The dashboard supports:

- 10 records per page
- 25 records per page
- 50 records per page
- 100 records per page

Pagination is implemented on the client side.

### ✅ Form Validation

User forms use **React Hook Form + Zod** for validation.

Validation covers:

- First Name
- Last Name
- Email
- Department

### 🔔 User Feedback

The application provides:

- Success notifications
- Error handling
- Form validation feedback
- Responsive UI states

---

## 🧠 Engineering Highlights

The application follows a modular structure with separate areas for:

- API communication
- Reusable UI components
- Hooks
- Pages
- Form schemas
- Services
- Utility functions
- Constants

This keeps UI, API communication, validation and supporting logic separated and easier to maintain.

---

## 🏗️ Application Flow

```text
                    ┌──────────────────────┐
                    │       React UI       │
                    │                      │
                    │ Dashboard / Table    │
                    │ Search / Filter      │
                    │ Add / Edit / Delete  │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Reusable Components  │
                    │                      │
                    │ Table / Modal        │
                    │ Search / Filter      │
                    │ Pagination           │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ API / Service Layer  │
                    │                      │
                    │ Axios                │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ JSONPlaceholder API  │
                    │                      │
                    │       /users         │
                    └──────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend

![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)

### Forms & Validation

![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge)

### API & Notifications

![Axios](https://img.shields.io/badge/Axios-671DDF?style=for-the-badge&logo=axios&logoColor=white)
![React Hot Toast](https://img.shields.io/badge/React_Hot_Toast-FF6B6B?style=for-the-badge)

### Testing

![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![Testing Library](https://img.shields.io/badge/Testing_Library-E33332?style=for-the-badge&logo=testinglibrary&logoColor=white)

### Deployment

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## 📁 Project Structure

```text
user-management-dashboard/
│
├── public/
│
├── screenshots/
│   ├── add-user.png
│   ├── dashboard.png
│   └── filter-modal.png
│
├── src/
│   ├── api/
│   │
│   ├── components/
│   │   ├── common/
│   │   ├── filter/
│   │   ├── layout/
│   │   ├── modal/
│   │   ├── pagination/
│   │   ├── search/
│   │   └── table/
│   │
│   ├── constants/
│   ├── hooks/
│   ├── pages/
│   ├── schemas/
│   ├── services/
│   └── utils/
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── vitest.config.js
```

---

## 🔌 API Integration

This application consumes the **JSONPlaceholder Users API**:

```text
https://jsonplaceholder.typicode.com/users
```

Axios is used for HTTP communication between the frontend and API.

The application uses the API to simulate user CRUD operations.

---

## ⚠️ API Limitation

JSONPlaceholder is a mock REST API and does not permanently persist mutation requests.

For example:

```text
Add User
    ↓
POST request
    ↓
API returns simulated success
    ↓
User appears in application
    ↓
Page refresh
    ↓
Original API data is loaded again
```

Therefore, users added or edited through the application will not remain after refreshing the page.

A production implementation would replace the mock API with a persistent backend and database.

---

## 🧪 Testing

The project is configured with **Vitest** and **Testing Library** for frontend testing.

Run the test suite with:

```bash
npm test
```

The project also includes ESLint for code-quality checks:

```bash
npm run lint
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Neha6383/user-management-dashboard.git
```

### 2. Navigate into the project

```bash
cd user-management-dashboard
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will provide the local development URL in the terminal.

---

## 📦 Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🔍 Key Challenges

### 1. Combining Search, Filtering, Sorting & Pagination

Multiple client-side operations need to work together without producing inconsistent results.

### 2. Handling Mock CRUD Behavior

JSONPlaceholder simulates create, update and delete operations without permanently storing the changes.

The application therefore needs to manage the difference between simulated API responses and the current UI state.

### 3. Managing Different Data States

The application handles data returned by the API as well as data created or modified through the UI.

### 4. Building Reusable Components

The UI is divided into reusable components for:

- Tables
- Search
- Filtering
- Pagination
- Modals
- Layout
- Common UI elements

This keeps the application easier to maintain and extend.

---

## 💡 What This Project Demonstrates

This project demonstrates practical experience with:

- React application development
- REST API integration
- Axios
- CRUD operations
- Reusable component architecture
- Form handling
- Schema-based validation
- Client-side search
- Filtering and sorting
- Client-side pagination
- Responsive UI development
- Error handling
- User feedback and notifications
- Frontend testing
- Code linting
- Vite-based development and deployment

---

## 🔮 Future Improvements

- [ ] Replace JSONPlaceholder with a custom backend
- [ ] Add persistent PostgreSQL or MongoDB storage
- [ ] Implement authentication
- [ ] Implement role-based authorization
- [ ] Move pagination and filtering to the backend
- [ ] Add user profile pages
- [ ] Add advanced filtering
- [ ] Add CSV/PDF export
- [ ] Expand automated test coverage
- [ ] Add CI/CD pipeline
- [ ] Add dark mode

---

## 🎯 Project Goal

The goal of this project was to build a practical, responsive user management application while applying real-world frontend development concepts such as:

```text
Component Architecture
        ↓
API Integration
        ↓
State & Data Handling
        ↓
Form Validation
        ↓
Search / Filter / Sort
        ↓
Pagination
        ↓
Testing
        ↓
Deployment
```

---

## 👩‍💻 Author

### Neha

**Software Engineering Intern | Full-Stack Developer | B.Tech CSE**

I'm currently working with **React.js, TypeScript, Node.js, Express.js, PostgreSQL, REST APIs and automated testing**, with additional experience in **Java, Spring Boot, MongoDB, MySQL and Python**.

### Connect with me

<p>
  <a href="https://github.com/Neha6383">
    <img src="https://img.shields.io/badge/GitHub-Neha6383-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>

  <a href="mailto:nehasharmaa102@gmail.com">
    <img src="https://img.shields.io/badge/Email-Contact-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email">
  </a>

  <a href="YOUR_LINKEDIN_URL">
    <img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
</p>

---

<p align="center">
  <strong>Build → Test → Learn → Improve 🚀</strong>
</p>

<p align="center">
  <i>Focused on building reliable software and becoming a stronger engineer every day.</i>
</p>
