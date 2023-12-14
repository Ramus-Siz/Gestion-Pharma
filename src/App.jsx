import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/product";
import SingleProduct from "./pages/single-product";
import ProductList from "./pages/products-list";
import Login from "./pages/login";
import UserContext from "./contexts/userContext";

function App() {
  const [pseudo, setPseudo] = useState(null);

  const handleLoginSubmit = (userName) => {
    setPseudo(userName);
  };
  return (
    <UserContext.Provider value={{ isLogged: true, pseudo: pseudo }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login onLoginSubmit={handleLoginSubmit} />}
          />

          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />}>
              <Route path=":id" element={<SingleProduct />} />
              <Route path="" element={<ProductList />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
