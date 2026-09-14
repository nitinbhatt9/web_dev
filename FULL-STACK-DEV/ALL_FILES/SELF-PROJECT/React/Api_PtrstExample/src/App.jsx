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
    <div style={{ height: "100vh" }}>
      <p className="heading">DYNAMIC API DATA FETCHING</p>
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

      <footer className="pagination-footer">
        <button
          className="pagination-btn btn-prev"
          onClick={() => setCount((prev) => Math.max(0, prev - 1))}
          disabled={count === 0}
        >
          PREV
        </button>

        <button className="page-indicator">Page No : {count}</button>

        <button
          className="pagination-btn btn-next"
          onClick={() => setCount((prev) => prev + 1)}
        >
          NEXT
        </button>
      </footer>
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
