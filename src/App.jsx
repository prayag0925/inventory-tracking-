import "./App.css";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="app-shell">
      <div className="container">
        <header className="hero">
          <p className="hero-badge">Realtime Inventory Manager</p>
          <h1 className="title">Inventory Tracking System</h1>
          <p className="subtitle">
            Add, update, delete and manage your inventory in real time with Firebase.
          </p>
        </header>

        <div className="dashboard-grid">
          <AddProduct />
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default App;