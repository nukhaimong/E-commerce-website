import React from "react";
import Navbar from "./component/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Shop from "./component/pages/Shop";
import ShopCategory from "./component/pages/ShopCategory";
import Product from "./component/pages/Product";
import Cart from "./component/pages/Cart";
import LoginSignup from "./component/pages/LoginSignup";
import Footer from "./component/Footer/Footer";
import men_banner from "./Assets/banner_mens.png";
import women_banner from "./Assets/banner_women.png";
import kid_banner from "./Assets/banner_kids.png";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/mens"
          element={<ShopCategory banner={men_banner} category={"men"} />}
        />
        <Route
          path="/womens"
          element={<ShopCategory banner={women_banner} category={"women"} />}
        />
        <Route
          path="/kids"
          element={<ShopCategory banner={kid_banner} category={"kid"} />}
        />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
