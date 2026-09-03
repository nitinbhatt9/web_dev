import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [newstore, setNewstore] = useState([]);

  console.log("DATA", newstore);

  useEffect(() => {
    fetch("/api/users.json?page=2")
      .then((res) => res.json())
      .then((result) => setNewstore(result)) // Directly updates state
      .catch((err) => console.log("Fetch failed:", err));
  }, []);

  return <div></div>;
}
