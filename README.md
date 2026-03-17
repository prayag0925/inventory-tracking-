# 📦 Inventory Tracking System

An industry-ready **Inventory Tracking Web Application** built using **React.js**, **Redux Toolkit**, and **Firebase Realtime Database**.
This system allows businesses to manage inventory efficiently with real-time synchronization and seamless CRUD operations.

---

## 🚀 Features

* ➕ **Add Product**
  Add new inventory items with product name, category, stock quantity, and price.

* 📋 **View Products**
  Display all products in a dynamic table with real-time updates.

* ✏️ **Update Product**
  Modify product details like stock and price instantly.

* ❌ **Delete Product**
  Remove discontinued products easily.

* ⚠️ **Low Stock Alerts** *(Optional Feature)*
  Highlights products with stock below a threshold.

* 🔄 **Real-Time Sync**
  Any update in Firebase is reflected instantly without page refresh.

---

## 🧠 Use Case

This system is ideal for:

* 🏪 Retail Stores
* 📦 Warehouses
* 🛒 Small Businesses

It helps track inventory in real time and ensures accurate product management across multiple users.

---

## 🛠️ Tech Stack

| Technology                    | Description       |
| ----------------------------- | ----------------- |
| ⚛️ React.js                   | Frontend UI       |
| 🧠 Redux Toolkit              | State Management  |
| 🔥 Firebase                   | Realtime Database |
| 🔄 Redux Thunk                | Async Operations  |
| 🎨 Tailwind CSS / Material UI | Styling           |
| 🚀 Vercel / Firebase Hosting  | Deployment        |

---

## 📂 Project Structure

```
src/
├── components/
├── redux/
│   ├── store.js
│   ├── productSlice.js
├── firebase/
│   └── firebaseConfig.js
├── pages/
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/inventory-tracking-system.git
cd inventory-tracking-system
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Firebase Setup

* Go to Firebase Console
* Create a project
* Enable Realtime Database
* Copy Firebase config

Create a file:

```
src/firebase/firebaseConfig.js
```

Paste your config:

```js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "YOUR_DB_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
```

---

### 4️⃣ Run Project

```bash
npm run dev
```

---

## 🔄 Redux Flow

* **Actions** → Trigger Firebase operations
* **Thunk Middleware** → Handle async calls
* **Reducers** → Update state
* **Store** → Central data management

---

## 📸 Screenshots

*(Add your project screenshots here)*

---

## 🌐 Deployment

You can deploy using:

* **Vercel**
* **Firebase Hosting**

---

## 🤝 Contributing

Feel free to fork this repo and improve the project.

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 💡 Author

**Prayag Patel**

---

🔥 *If you like this project, give it a ⭐ on GitHub!*




