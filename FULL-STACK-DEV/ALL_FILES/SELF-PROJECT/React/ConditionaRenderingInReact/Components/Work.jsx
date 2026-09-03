import React from "react";

export default function Work() {
  function form(e) {
    e.preventDefault();
    console.log("Form Submitted");
  }
  return (
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
        This is an Work Section:-
      </p>
      <div
        style={{
          textAlign: "center",
          justifyItems: "center",
        }}
      >
        <form
          onSubmit={(e) => form(e)}
          style={{
            backgroundColor: "black",
            width: "400px",
            color: "white",
          }}
        >
          <label>Name</label>
          <br />
          <input
            type="text"
            placeholder="Enter Your First Name"
            style={{ border: "2px red solid" }}
          />
          <input
            type="text"
            placeholder="Enter Your Last Name"
            style={{ border: "2px red solid" }}
          />
          <br />
          <br />
          <label>DOB</label>
          <br />
          <input
            type="date"
            placeholder="Enter Your Date of Birth"
            style={{ border: "2px red solid" }}
          />
          <br />
          <br />
          <label>Email</label>
          <br />
          <input
            type="email"
            placeholder="Enter Your Email"
            style={{ border: "2px red solid" }}
          />
          <br />
          <br />
          <label>Contact</label>
          <br />
          <input
            type="tel"
            placeholder="Enter Your Contact"
            maxLength="12"
            style={{ border: "2px red solid" }}
          />
          <br />
          <br />
          <label>Father's Name</label>
          <br />
          <input
            type="text"
            placeholder="Enter Your Father's Name"
            style={{ border: "2px red solid" }}
          />
          <br />
          <br />
          <label>Select Your Course</label>
          <br />
          <input
            type="checkbox"
            name="a"
            placeholder="Select your course"
            style={{ border: "2px red solid" }}
          />
          <input
            type="checkbox"
            name="b"
            placeholder="Select your course"
            style={{ border: "2px red solid" }}
          />
          <input
            type="checkbox"
            name="c"
            placeholder="Select your course"
            style={{ border: "2px red solid" }}
          />
          <br />
          <br />
          <label>Specify Your Gender</label>
          <br />
          <input type="radio" name="m" /> male
          <input type="radio" name="m" value="" /> female
          <br />
          <br />
          <button style={{ border: "2px solid red" }}>Submit</button>
          <br />
        </form>
      </div>
    </div>
  );
}
