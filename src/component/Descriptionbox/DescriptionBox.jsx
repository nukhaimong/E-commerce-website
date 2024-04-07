import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="description-box">
      <div className="description-box-navigator">
        <div className="description-box-nav-box">Description</div>
        <div className="description-box-nav-box fade">Reviews (122)</div>
      </div>
      <div className="description-box-description">
        <p>
          An e-commerce website is an online platform that fecillitate the
          buying and selling the product or services over the internet. It
          serves ad virtual marketplace where business and indivisual can
          showcase their products, iteract with customers and conduct
          transactions without the needs and physical presence. E-commerce
          websites have gained immerse popularity due to their convinience,
          accessibily and the global reach they offer.
        </p>
        <p>
          E-commerce website typically display product or services along with
          detailed description, images, prices and may available variation(e.g
          size, colors). Each product usually its own their own dedicated page
          with relavent information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
