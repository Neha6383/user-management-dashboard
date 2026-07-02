# User Management Dashboard

A responsive User Management Dashboard built with React, Vite, Tailwind CSS, Axios, React Hook Form, and Zod. The application allows users to view, add, edit, delete, search, sort, filter, and paginate user records using the JSONPlaceholder REST API.

---

## Live Demo

https://user-management-dashboard-five-beta.vercel.app/

---

## GitHub Repository

https://github.com/Neha6383/user-management-dashboard

---

## Features

- View users from JSONPlaceholder API
- Add new users
- Edit existing users
- Delete users
- Search by first name, last name, email, or department
- Filter users
- Sort users
- Pagination (10, 25, 50, 100 records)
- Client-side form validation using Zod
- Responsive UI
- Error handling
- Success notifications

---

## Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS

### Form Handling
- React Hook Form
- Zod

### HTTP Client
- Axios

### Deployment
- Vercel

---

## Folder Structure

```
src/
│
├── api/
├── components/
│   ├── common/
│   ├── filter/
│   ├── layout/
│   ├── modal/
│   ├── pagination/
│   ├── search/
│   └── table/
│
├── constants/
├── hooks/
├── pages/
├── schemas/
├── services/
└── utils/
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/Neha6383/user-management-dashboard.git
```

Navigate into the project

```bash
cd user-management-dashboard
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

---

## API Used

JSONPlaceholder

https://jsonplaceholder.typicode.com/users

---

## Validation

The application uses **Zod** with **React Hook Form** to validate:

- First Name
- Last Name
- Email
- Department

---

## Assumptions

- JSONPlaceholder simulates Create, Update, and Delete operations.
- Since the API does not permanently store data, newly added or edited users disappear after refreshing the page.
- Pagination is implemented on the client side.

---

## Challenges Faced

- Handling JSONPlaceholder's mock CRUD behavior.
- Managing different data formats between API users and newly created users.
- Combining search, filtering, sorting, and pagination without conflicts.
- Building reusable and modular React components.

---

## Future Improvements

- Backend integration with persistent storage.
- Authentication and authorization.
- Server-side pagination.
- Advanced filtering.
- User profile page.
- Dark mode.
- Export users to CSV/PDF.

---

## Author

Neha