import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [image, setImage] = useState([]);
  const [count, setCount] = useState(0);

  async function data() {
    const res = await fetch(
      `https://picsum.photos/v2/list?page=${count}&limit=40`,
    );
    const result = await res.json();

    console.log(result);
    setImage(result);
  }
  useEffect(() => {
    data();
  }, [count]);
  return (
    <div>
      <p class=" flex justify-center font-black text-5xl font-serif bg-red-500 fixed top-0 right-0 left-0 ">
        DYNAMIC API DATA FETCHING
      </p>
      <div class="mt-20 inline-grid grid-cols-10 grid-rows-4 gap-1">
        {image.map((item) => (
          <img
            key={item.id}
            src={item.download_url}
            height="150"
            width="180"
            alt={item.author}
            className="h-32 w-60 rounded-2xl cursor-pointer opacity-500 object-cover transition-transform duration-300 ease-in-out hover:scale-106 overflow-hidden "
          />
        ))}
      </div>

      <div class=" h-20 flex justify-center gap-5 m-10">
        <button
          class="border-2 border-green-500  w-30 bg-green-500 hover:bg-green-800 hover:font-black cursor-pointer"
          onClick={() => setCount(count + 1)}
        >
          NEXT
        </button>
        <button
          class="border-2 border-red-500 w-30 bg-red-500 hover:bg-red-800 hover:font-black cursor-pointer"
          onClick={() => setCount(count - 1)}
        >
          PREV
        </button>
        <button class=" border-2 border-blue-500 w-30 h-20 bg-blue-600 font-black">
          Page No : {count}
        </button>
      </div>
    </div>
  );
}

// import React, { useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Inc counter</button>
//       <button onClick={() => setCount(count - 1)}>Dec counter</button>

//       {count}
//     </div>
//   );
// }
