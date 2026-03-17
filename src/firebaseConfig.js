import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "YOUR_REAL_API_KEY",
  authDomain: "inventory-tracking-syste-738e8.firebaseapp.com",
  databaseURL: "https://inventory-tracking-syste-738e8-default-rtdb.firebaseio.com",
  projectId: "inventory-tracking-syste-738e8",
  storageBucket: "inventory-tracking-syste-738e8.appspot.com",
  messagingSenderId: "YOUR_REAL_ID",
  appId: "YOUR_REAL_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);