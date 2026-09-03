import React from "react";

export default function Gallery() {
  return (
    <div>
      <h2 style={{ color: "white" }}>This is Gallery section:-</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ color: "white" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          quae exercitationem doloremque, blanditiis veritatis molestiae
          laboriosam quidem, sequi eius nostrum voluptas ipsam accusantium! In
          soluta quaerat necessitatibus minus nam magni.
        </p>
        <p style={{ color: "white" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          quae exercitationem doloremque, blanditiis veritatis molestiae
          laboriosam quidem, sequi eius nostrum voluptas ipsam accusantium! In
          soluta quaerat necessitatibus minus nam magni.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="workimage"
            style={{ height: "150px", width: "200px" }}
          />
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="workimg"
            style={{ height: "200px", width: "200px" }}
          />
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="workimage"
            style={{ height: "300px", width: "200px" }}
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1669686966146-da8d2400de46?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="workimage"
            style={{ height: "350px", width: "250px" }}
          />
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="workimage"
            style={{ height: "300px", width: "200px" }}
          />
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="workimg"
            style={{ height: "200px", width: "200px" }}
          />
          <img
            src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="workimage"
            style={{ height: "150px", width: "200px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            width: "100%",
            marginTop: "-210px",
          }}
        >
          <p
            style={{
              height: "350px",
              width: "200px",
              background:
                "linear-gradient(to  bottom, black,black,blue,purple)",
            }}
          ></p>
          <p
            style={{
              height: "300px",
              width: "200px",
              background:
                "linear-gradient(to  bottom, black,black,blue,purple)",
            }}
          ></p>
          <p
            style={{
              height: "200px",
              width: "200px",
              background:
                "linear-gradient(to  bottom, black,black,blue,purple)",
            }}
          ></p>
          <p
            style={{
              height: "150px",
              width: "250px",
              background:
                "linear-gradient(to  bottom, black,black,blue,purple)",
            }}
          ></p>
          <p
            style={{
              height: "200px",
              width: "200px",
              background: "linear-gradient(to  bottom,black,black,blue,purple)",
            }}
          ></p>
          <p
            style={{
              height: "300px",
              width: "200px",
              background:
                "linear-gradient(to  bottom, black,black,blue,purple)",
            }}
          ></p>
          <p
            style={{
              height: "350px",
              width: "200px",
              background:
                "linear-gradient(to  bottom, black,black,blue,purple)",
            }}
          ></p>
        </div>
      </div>
    </div>
  );
}
