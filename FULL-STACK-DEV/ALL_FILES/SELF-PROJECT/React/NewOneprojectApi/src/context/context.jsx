import { createContext } from "react";

export const Context = createContext();

const ContextApi = ({ children }) => {
  const name = "Nitin";

  return <Context.Provider value={{ name }}>{children}</Context.Provider>;
};
export default ContextApi;
