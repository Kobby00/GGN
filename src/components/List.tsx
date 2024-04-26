import React from "react";

type ProductListProps = {
  products: string[];
  title: string;
};

const ProductList: React.FC<ProductListProps> = ({ products, title }) => {
  return (
    <div>
      <ul>
        <p className="text-white font-bold text-2xl pb-4">{title}</p>
        {products.map((product, index) => (
          <li
            key={index}
            className="text-gray-500 text-md pb-2 font-semibold hover:text-yellow-600 cursor-pointer"
          >
            {product}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
