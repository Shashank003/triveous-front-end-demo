import React from "react";
import Product from "./Product";
import { ArrowRightIcon } from "lucide-react";

const ProductsMenu = () => {
  return (
    <div className="space-y-8 pb-8">
      <div className="space-y-6">
        <h4 className="text-[#424141] font-bold text-xl">
          More Products from <span className="text-purple-800">OpenAI</span>
        </h4>
        <div className="flex items-center gap-x-4">
          <Product />
          <Product />
          <Product />
          <ArrowRightIcon className="text-[#636363] h-10 w-10 cursor-pointer" />
        </div>
      </div>
      <div className="space-y-6">
        <h4 className="text-[#424141] font-bold text-xl">Similar products</h4>
        <div className="flex items-center gap-x-4">
          <Product />
          <Product />
          <Product />
          <ArrowRightIcon className="text-[#636363] h-10 w-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ProductsMenu;
