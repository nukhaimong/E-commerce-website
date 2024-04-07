import React, { useContext } from "react";
import { ShopContext } from "../Context/Context";
import { useParams } from "react-router-dom";
import BreadCum from "../BreadCum/BreadCum";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import DescriptionBox from "../Descriptionbox/DescriptionBox";
import RelatedProduct from "../RelatedProduct/RelatedProduct";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <BreadCum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  );
};

export default Product;
