# Login & Signup UI — React + Tailwind CSS

A clean, responsive **Login and Signup form UI** built with React.js and Tailwind CSS. Features a smooth toggle between Login and Signup modes, form validation, localStorage-based authentication, and a Dashboard page after login.

## 🔗 Live Demo

[View Live →](https://login-signup-two-rho.vercel.app/)

---

## ✨ Features

- 🔄 Toggle between Login and Signup mode with animated sliding tab
- ✅ Form validation — empty fields, invalid email, min 6 char password
- 🔴 Real-time error messages per field
- 💾 localStorage-based auth — register and login without a backend
- 🚫 Duplicate email detection on Signup
- 🏠 Dashboard page after login — shows name, email, active status and logout
- 📝 Dynamic form fields — Name & Confirm Password appear only on Signup
- 🎨 Gradient background and card design using Tailwind CSS
- ⚡ Built with Vite for fast development

## 🛠️ Tech Stack

| Tech | Usage |
|------|-------|
| React.js | UI components & state management |
| Tailwind CSS | Styling & responsive design |
| Vite | Build tool |
| JavaScript (ES6+) | Logic & interactivity |
| localStorage | Client-side auth storage |

## 📸 Screenshots

### Login Page
![Login](https://login-signup-two-rho.vercel.app/)

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/rushi0612/LoginSignup.git

# Go into the folder
cd LoginSignup

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
LoginSignup/
├── src/
│   ├── components/
│   │   ├── Login.jsx        # Login/Signup form with validation
│   │   └── Dashboard.jsx    # Dashboard shown after login
│   ├── App.jsx              # Root component with auth state
│   └── main.jsx             # Entry point
├── index.html
└── package.json
```

## 🔐 How Auth Works

1. **Sign Up** — fills form → data saved to `localStorage`
2. **Login** — checks credentials against `localStorage`
3. **Dashboard** — shows user info on successful login
4. **Logout** — clears session, returns to Login page

## 🙋‍♂️ Author

**Rushikesh Patil**
- GitHub: [@rushi0612](https://github.com/rushi0612)
- LinkedIn: [Rushikesh Patil](https://www.linkedin.com/in/rushi0612)
