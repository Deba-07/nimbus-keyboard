# ⌨️ Nimbus Keyboard — Interactive 3D Product Landing Page

A modern, high-fidelity **interactive product website** built with **Next.js 16, React 19, GSAP animations, and Three.js**.
The application simulates a real hardware startup website showcasing a customizable premium mechanical keyboard called **Vapor75**.

🔗 **Live Demo:** [https://nimbus-keyboard-six.vercel.app/](https://nimbus-keyboard-six.vercel.app/)

---

## 🧩 About the Project

**Nimbus Keyboard** is a portfolio-grade frontend application that replicates a real commercial hardware product landing experience.

The website presents a premium customizable mechanical keyboard through animated storytelling, interactive UI sections, and immersive visuals.
The focus of the project is to demonstrate advanced frontend development skills including animation systems, 3D rendering, and modern UI architecture.

This project is not a static landing page — it is an **interactive product experience**.

---

## ✨ Key Features

### 🎬 Animation & Interaction

* GSAP powered scroll animations
* Smooth section transitions
* Interactive UI feedback
* Micro-interactions and hover effects
* Scroll-triggered storytelling

### 🧊 3D Experience

* 3D keyboard rendering using **Three.js**
* React Three Fiber integration
* Drei helpers for scene composition
* Real-time visual presentation

### 🎛️ Product Customization

* Mechanical switch type selection
* Keycap presentation
* Hardware feature highlights
* Visual product preview

### 🛒 Commerce Ready

* Razorpay payment integration
* Purchase flow modal (Radix Dialog)
* Conversion-style call-to-action buttons

### 📱 Responsive Design

* Mobile optimized layouts
* Tablet compatibility
* Desktop immersive layout
* Modern typography & spacing

---

## 🧠 What This Project Demonstrates

This project was built to showcase real-world frontend engineering ability:

* Building production UI using Next.js App Router
* Creating immersive marketing websites
* Integrating 3D graphics in React
* Advanced animation architecture using GSAP
* Component-driven development
* Responsive UI engineering
* Payment gateway integration

---

## 🛠️ Tech Stack

### Frontend

* **Next.js 16**
* **React 19**
* **TypeScript**
* **TailwindCSS v4**

### Animation & 3D

* **GSAP**
* **@gsap/react**
* **Three.js**
* **React Three Fiber**
* **@react-three/drei**

### UI & Utilities

* Radix UI Dialog
* React Icons
* clsx

### Payments

* Razorpay Integration

### Tooling

* ESLint
* Prettier
* Tailwind Prettier Plugin

### Deployment

* Vercel

---

## 📂 Project Structure

```
app/                → Next.js App Router pages
components/         → Reusable UI components
sections/           → Landing page sections
public/             → Static assets & images
```

The architecture follows a **component-driven modular design**, where each section of the landing page is built as an independent reusable module.

---

## 🚀 Getting Started

### 1. Clone the repository

```
git clone https://github.com/Deba-07/nimbus-keyboard.git
cd nimbus-keyboards
```

### 2. Install dependencies

```
npm install
```

### 3. Run development server

```
npm run dev
```

The app will run at:

```
http://localhost:3000
```

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```
NEXT_PUBLIC_RAZORPAY_KEY=your_public_key
RAZORPAY_SECRET=your_secret_key
```

⚠️ Never commit `.env.local` to GitHub.

---

## 🎯 Purpose

This project was created as a **portfolio project** to practice and demonstrate:

* Interactive UI engineering
* Modern landing page design
* Animation systems
* 3D web graphics
* Realistic product marketing UI

---

## 🚧 Future Improvements

* Shopping cart system
* User authentication
* Order history dashboard
* CMS product management
* 3D configurator (change colors & materials)
* Web3 payment integration (crypto checkout)

---

## 👤 Author

**Debasis Das**
Aspiring Full-Stack & Web3 Developer

---

## 📄 License

This project is created for educational and portfolio purposes only.
