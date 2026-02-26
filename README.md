# Cartify 🛒

Cartify is a modern e-commerce web application built with Vue 3, Composition API, Pinia, and Tailwind CSS. The application integrates with a RESTful API to provide dynamic product fetching, server-side pagination, configurable per-page results, and responsive grid layouts.

---

## 🚀 Features

- **Dynamic Product Listing** — API-driven pagination with configurable items per page
- **Grid & List View Toggle** — Switch between product display layouts
- **Cart Management** — Centralized state management with Pinia
- **Wishlist** — Save and manage favourite products
- **Authentication** — User login and registration with route-based access control
- **Dynamic Breadcrumbs** — Context-aware breadcrumb navigation across all pages
- **Reactive Data Fetching** — Watchers handle live updates as filters and pagination change
- **Error & Loading States** — Graceful handling of API failures and loading feedback
- **Responsive Design** — Optimized for both mobile and desktop

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Vue 3 | Frontend framework (Composition API + `<script setup>`) |
| Vue Router | Client-side routing and navigation guards |
| Pinia | Global state management |
| Tailwind CSS | Utility-first styling |

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/cartify.git

# Navigate into the project
cd cartify

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 🗺️ Pages & Routes

| Path | Description |
|---|---|
| `/` | Landing page |
| `/collections/all` | All products with pagination and view toggle |
| `/products/:id` | Single product detail |
| `/cart` | Shopping cart |
| `/wishlist` | Saved items |
| `/checkout` | Checkout flow |
| `/account` | User account (protected) |
| `/login` | Login page |
| `/register` | Registration page |

---

## 🧠 State Management

Cartify uses **Pinia** for global state across dedicated stores for products, cart, wishlist, and breadcrumbs — keeping components clean and data consistent across the application.

---

## 📄 License

[MIT](LICENSE)