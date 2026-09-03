import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

export default function ContextApi({ children }) {
  let name = "Nitin bhatt";

  const [data, setData] = useState(null);
  console.log("us", data);

  const [res, setRes] = useState();

  async function getname() {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const res = await data.json();
      await setData(res);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getname();
  }, []);
  return <Context.Provider value={{ data, name }}>{children}</Context.Provider>;
}
