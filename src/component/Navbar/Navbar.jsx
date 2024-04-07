import "./Navbar.css";
import Logo from "../../Assets/logo.png";
import cart_icon from "../../Assets/cart_icon.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/Context";

const Navbar = () => {
  const [manu, setManu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={Logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-manu">
        <li onClick={() => setManu("shop")}>
          <Link style={{ textDecoration: "none" }} to={"/"}>
            Shop
          </Link>
          {manu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setManu("men")}>
          <Link style={{ textDecoration: "none" }} to={"/mens"}>
            Men's
          </Link>
          {manu === "men" ? <hr /> : <></>}
        </li>
        <li onClick={() => setManu("women")}>
          <Link style={{ textDecoration: "none" }} to={"/womens"}>
            Women's
          </Link>
          {manu === "women" ? <hr /> : <></>}
        </li>
        <li onClick={() => setManu("kids")}>
          <Link style={{ textDecoration: "none" }} to={"/kids"}>
            Kids
          </Link>
          {manu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-log-cart">
        <Link style={{ textDecoration: "none" }} to={"/login"}>
          <button>Login</button>
        </Link>
        <Link style={{ textDecoration: "none" }} to={"/cart"}>
          <img src={cart_icon} alt="" />
        </Link>

        <div className="nav-log-cart-count">
          {getTotalCartItems() === 0 ? 0 : getTotalCartItems()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
