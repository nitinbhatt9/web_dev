import React from "react";

export default function Gallery() {
  return (
    <div>
      <div>
        <p
          style={{
            fontWeight: "bolder",
            marginTop: "100px",
            fontSize: "30px",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "black",
            color: "red",
          }}
        >
          This is an Gallery section :-
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <img
          src="https://images.unsplash.com/photo-1779976739097-d7a3b52e69b1?q=80&w=1198&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image1"
          style={{ height: "250px", width: "380px" }}
        />
        <img
          src="https://images.unsplash.com/photo-1781794902242-f8578908d640?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image2"
          style={{ height: "250px", width: "380px" }}
        />
        <img
          src="https://images.unsplash.com/photo-1782318691186-1d909c479de4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image3"
          style={{ height: "250px", width: "380px" }}
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1716138192476-f34e85ad43c2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image4"
          style={{ height: "250px", width: "380px" }}
        />
      </div>
      <img
        src="https://images.unsplash.com/photo-1779952369141-319d17bd03eb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image5"
        style={{ height: "50%", width: "100%" }}
      />
      <br />
    </div>
  );
}
