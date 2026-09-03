import React, { useEffect, useState } from "react";
import "./App.css";
import { FaStar } from "react-icons/fa";

export default function App() {
  const [store, setStore] = useState([]);

  async function value() {
    const res = await fetch("https://dummyjson.com/products");
    const result = await res.json();
    setStore(result.products);

    console.log(JSON.stringify(result.products, null, 2));
  }
  useEffect(() => {
    value();
  }, []);
  return (
    <div className="bg-blue-300 min-h-screen">
      <div className=" w-full bg-blue-300 shadow-md">
        <p className="flex justify-center text-red-600  text-[50px] `[text-shadow:_0_4px_8px_rgba(0,0,0,0.5)]`  font-black w-full font-[fangsong] ">
          API FETCHING
        </p>
        <h1 className="flex justify-center  text-red-600  text-[50px] `[text-shadow:_0_4px_8px_rgba(0,0,0,0.5)]` font-black w-full font-[fangsong] m-0 pb - [10px]">
          PRODUCT INFORMATION
        </h1>
      </div>
      <div className="flex flex-wrap gap-5 p-5 justify-center ">
        {store.map((products) => (
          <div key={products.id}>
            <div className=" bg-red-50 transition-transform duration-200 ease-in-out hover:scale-110 h-192 shadow-red-600  w-full max-w-sm flex flex-col p-4 rounded-lg shadow-sm">
              <div className="overflow-hidden rounded-md h-48 w-full flex items-center justify-center bg-blue-50 mb-4 shrink-0">
                <img
                  src={
                    Array.isArray(products.images)
                      ? products.images[0]
                      : products.images || products.thumbnail
                  }
                  alt={products.thumbnail}
                  className="w-full h-full object-contain transition-transform duration-200 ease-in-out hover:scale-120"
                />
              </div>
              <div className="flex justify-between m-4">
                <button className="rounded p-0.75  cursor-pointer bg-red-300 hover:bg-red-400 font-extrabold ">
                  Beauty
                </button>
                <button className="rounded p-0.75  bg-red-300 cursor-pointer  hover:bg-red-400 font-bold ">
                  In Stock
                </button>
              </div>
              <div className=" font-extrabold">
                <h2 className="text-wrap text-center">
                  Product Name <br />
                  {products.title}
                </h2>
              </div>
              <div>
                <h3 className="font-[cursive] text-[13px] w-full h-22.5 m-2.5">
                  <samp
                    style={{
                      fontSize: "15px",
                      fontWeight: "bolder",
                      textDecoration: "underline",
                    }}
                  >
                    Description -
                  </samp>
                  {products.description}
                </h3>
              </div>
              <div>
                <h4 className="flex justify-between font-extrabold">
                  <button className="bg-gray-200 rounded p-0.75 hover:bg-gray-400">
                    #{products.tags[0]}
                  </button>
                  <button className="bg-gray-200 rounded p-0.75 hover:bg-gray-400">
                    #{products.tags[1]}
                  </button>
                </h4>
              </div>
              <div className="flex justify-between ">
                <div>
                  <h1 className="font-mono font-extrabold text-green-800 text-[20px] hover:cursor-pointer bg-green-400 hover:bg-green-500 rounded p-0.75">
                    Price:-{products.price}$
                  </h1>
                </div>
                <div>
                  <FaStar size={"16px"} />
                  <h2 className="text-red-800 font-mono font-extrabold text-[20px] hover:cursor-pointer hover:bg-red-500 bg-red-400 rounded p-0.75 ">
                    Rating:-
                    {products.rating}
                  </h2>
                </div>
              </div>
              <div className="flex justify-between m-1">
                <div>
                  <h2 className="text-[20px] text-purple-800 bg-purple-300 hover:cursor-pointer hover:bg-purple-400 rounded p-0.75 font-bold">
                    Discount:-{products.discountPercentage}%
                  </h2>
                </div>
                <div>
                  <h2 className="text-[20px] text-purple-800 bg-purple-300 hover:cursor-pointer hover:bg-purple-400 rounded p-0.75 font-bold">
                    Stocks:-{products.stock}
                  </h2>
                </div>
              </div>
              <div>
                <h2 className="flex justify-center font-normal text-sm">
                  <div className="font-medium">Brand - </div>
                  <div>{products.brand}</div>
                </h2>
              </div>
              <div>
                <h2 className="flex justify-center font-normal text-sm">
                  <div className="font-medium">Product - </div>
                  <div>{products.sku}</div>
                </h2>
              </div>
              <div>
                <h2 className="flex justify-center font-normal text-sm">
                  <div className="font-medium">Warranty - </div>
                  <div>{products.warrantyInformation}</div>
                </h2>
                <h2 className="flex justify-center font-normal text-sm">
                  <div className="font-medium">Shipping - </div>
                  <div>{products.shippingInformation}</div>
                </h2>
                <h2 className="flex justify-center font-normal text-sm">
                  <div className="font-medium">Return Policy - </div>
                  <div>{products.availabilityStatus}</div>
                </h2>
              </div>
              <div>
                <h2 className="flex justify-center font-normal text-sm">
                  <div className="font-medium">Minimum Quantity - </div>
                  <div>{products.minimumOrderQuantity}</div>
                </h2>
              </div>
              <div>
                <h2 className="flex justify-center font-normal text-sm">
                  <div className="font-medium">Reviewer Name - </div>
                  <div>{products.reviews[0].reviewerName}</div>
                </h2>
                <h2 className="flex justify-center font-normal text-sm">
                  <div className="font-medium">Reviewer Name - </div>
                  <div>{products.reviews[1].reviewerName}</div>
                </h2>
              </div>
              <div className="flex justify-center">
                <button className="text-normal bg-blue-500 w-full rounded-[10px] p-1 hover:bg-blue-800 hover:cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
