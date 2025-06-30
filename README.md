# 🧑‍💻 Task Manager & User Identity App

This is a full-stack web application built with **React.js**, **Tailwind CSS**, and **Node.js/Express** with **MongoDB**. It allows users to:

- 📋 Manage their daily tasks (add, complete, delete, filter)
- 👤 Create and register their identity (name, email, role)
- 🔍 Search and filter users
- ⚡ Interact with the backend using API endpoints

---

## 🚀 Technologies Used

### Frontend:
- [React.js](https://reactjs.org/)
- [Vite](https://vitejs.dev/) for fast development
- [Tailwind CSS](https://tailwindcss.com/) for modern styling
- Axios for API requests

### Backend:
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) with Mongoose
- dotenv for environment variables

---

## 🗂️ Project Structure


---

## 📦 Features

### 🧠 Task Manager
- Add, delete, complete, and filter tasks
- Save tasks in `localStorage`
- Dark/light mode switcher

### 👤 User Identity System
- User registration form (`name`, `email`, `role`)
- Store users in MongoDB (`TaskApp > users`)
- List users with pagination and search
- Fully responsive design

---

## 🔧 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo


cd react-app
pnpm install
pnpm dev


cd ../backend
pnpm install
pnpm start


PORT=5000
MONGO_URI=mongodb+srv://your-user:your-pass@your-cluster.mongodb.net/TaskApp
