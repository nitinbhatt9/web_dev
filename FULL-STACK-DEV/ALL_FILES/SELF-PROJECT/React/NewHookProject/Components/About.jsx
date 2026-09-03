import React from "react";

export default function About() {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "darkgray",
          color: "black",
          display: "flex",
          justifyContent: "center",
        }}
      >
        About Section :-
      </h1>
      <h3
        style={{
          backgroundColor: "lightcyan",
          display: "flex",
          justifyContent: "center",
        }}
      >
        This is about section of this site where you can check our projects,
        also you can review our upcomming projects
      </h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <img
          src="https://images.unsplash.com/photo-1712217559117-665e01ae5bc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFib3V0JTIwdXMlMjBwYWdlfGVufDB8fDB8fHww"
          alt="imgaboutsection"
          style={{ width: "32%", height: "300px" }}
        />
        <img
          src="https://images.unsplash.com/photo-1712217559117-665e01ae5bc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFib3V0JTIwdXMlMjBwYWdlfGVufDB8fDB8fHww"
          alt="imgaboutsection"
          style={{ width: "32%", height: "300px" }}
        />
        <img
          src="https://images.unsplash.com/photo-1712217559117-665e01ae5bc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFib3V0JTIwdXMlMjBwYWdlfGVufDB8fDB8fHww"
          alt="imgaboutsection"
          style={{ width: "32%", height: "300px" }}
        />
      </div>
    </div>
  );
}
