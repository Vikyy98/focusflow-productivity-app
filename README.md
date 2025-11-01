# 🧠 FocusFlow – Modern Productivity Dashboard

A modern productivity app built using **React**, **TypeScript**, and **Tailwind CSS (v4)**. FocusFlow helps you stay organized with **Notes**, **Tasks**, and a **Pomodoro Timer**, all inside a clean, responsive, theme-adaptive dashboard.

---

## 🚀 Features

* **🧩 Modular Dashboard:** Combines Notes, Tasks, and Timer in one place.
* **✅ Task Management:** Full CRUD (Create, Read, Update, Delete) for tasks, including marking complete.
* **📝 Notes:** Simple notes with edit & update capability.
* **⏱️ Pomodoro Timer:** Focus Timer with a circular progress animation.
* **🌗 Theme Adaptive:** Dark / Light theme with smooth transitions.
* **🧠 Global State:** Context API + Reducer pattern for robust state management.
* **💾 Persistent Architecture:** Ready for state persistence (e.g., local storage).
* **📱 Responsive Design:** Fully mobile-friendly using Tailwind breakpoints.

---

## 💻 Tech Stack

| Category | Tool |
| :--- | :--- |
| **Frontend** | React 19 + TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Routing** | React Router DOM v7 |
| **State Management** | React Context + useReducer |
| **Icons** | React Icons (FontAwesome) |
| **Build Tool** | Vite |

---

## ⚙️ Key Concepts & Design

### 🧠 Concepts Used

* `useReducer`: For complex state logic (Notes, Tasks) for predictable state transitions.
* `useCallback / useMemo`: To optimize performance and prevent unnecessary re-renders.
* **Context API**: Global state management per module (Notes, Tasks, Timer).
* **Tailwind Dark Mode**: Utilizes `dark:` variants and `document.documentElement.classList` for toggling.
* **TypeScript Interfaces**: Ensures safe props and state types across the application.
* **Responsive Design**: Built using Tailwind breakpoints (`sm`, `md`, `lg`, `xl`).

### 🎨 UI/UX Highlights

* **Clean Design:** Tailwind v4 for a clean, modern, and consistent aesthetic.
* **Smooth Theming:** Dark/light theme with smooth color transitions.
* **Architecture:** Clear, modular component structure for maintainability.
* **Dashboard:** Modern, minimal, and intuitive layout.
* **Focus Timer:** Engaging Pomodoro Timer with an animated SVG circle progress bar.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** and **npm** installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/](https://github.com/)<YOUR_USERNAME>/FocusFlow.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd FocusFlow
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm run dev
    ```

The application should now be running locally, typically at `http://localhost:5173`.

---

## 🤝 Author

**Vigneshwaran**
* Full-Stack Developer (C# / .NET Core / React / TypeScript)
* 📍 Passionate about building clean, scalable web apps.
