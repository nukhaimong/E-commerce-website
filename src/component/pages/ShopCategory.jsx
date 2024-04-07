import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/Context";
import drop_down_icon from "../../Assets/dropdown_icon.png";
import Item from "../Item/Item";

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="shop-category-banner" src={banner} alt="" />
      <div className="shop-category-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shop-category-sort">
          Sort by <img src={drop_down_icon} alt="" />
        </div>
      </div>
      <div className="shop-category-products">
        {all_product.map((item, i) => {
          if (category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                image={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            null;
          }
        })}
      </div>
      <div className="shop-category-loademore">Explore more</div>
    </div>
  );
};

export default ShopCategory;
