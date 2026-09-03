import React from "react";

export default function App() {
  const data = {
    name: "nitin",
    age: "24",
    course: "BCA",
  };

  localStorage.setItem("name", JSON.stringify(data));
  // console.log(typeof name);
  const name = localStorage.getItem("name");
  console.log(typeof JSON.parse(name));
  return (
    <div>
      <p>hii{name}</p>
    </div>
  );
}

//   localStorage.setItem("name1", "a");
//   localStorage.setItem("name2", "b");
//   localStorage.setItem("name3", "c");
//   localStorage.setItem("name4", "d");
//   const name1 = localStorage.getItem("name1");
//   const name2 = localStorage.getItem("name2");
//   const name3 = localStorage.getItem("name3");
//   const name4 = localStorage.getItem("name4");

//   localStorage.removeItem("name3");
//   localStorage.removeItem("name4");
//   return (
//     <>
//       <p>Hii {name1}</p>
//       <p>Hii {name2}</p>
//       <p>Hii {name3}</p>
//       <p>Hii {name4}</p>
//     </>
//   );
// }
