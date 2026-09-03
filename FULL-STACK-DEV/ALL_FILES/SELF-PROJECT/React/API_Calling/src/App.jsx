import React, { useEffect, useState } from "react";

export default function App() {
  const [note, setNote] = useState();
  const [count, setCount] = useState(0);
  async function data() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await res.json();
      console.log(data);
      setNote(data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(count);

  useEffect(() => {
    data();
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <p>Hello</p>
      <p>{note?.title}</p>
    </div>
  );
}
