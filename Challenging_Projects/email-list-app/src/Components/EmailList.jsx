import React, { useState } from "react";

function EmailList() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const scriptURL = "https://script.google.com/macros/s/AKfycbzil6gtA73tBDAzmfkru7WkEamYW2ahE84i86OAdcyrx2kN3SqMk38xn028fEgLEJDl/exec";

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);

    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        setMessage("Thanks for subscribing");
        setTimeout(() => setMessage(""), 5000);
        setEmail("");
      })
      .catch((error) => console.error("Error!", error.message));
  };

  return (
    <div style={{ marginLeft: "500px", marginTop: "50px" }}>
      <div style={{ marginRight: "20px", color: "green", textAlign: "center" }}>
        <h2>18. Email-Response</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" style={{ backgroundColor: "red", color: "white" }}>
          Subscribe
        </button>
      </form>
      <span id="msg">{message}</span>
      <h4 id="msg1">
        To verify{" "}
        <a
          style={{ color: "red" }}
          href="https://docs.google.com/spreadsheets/d/1pxqGZ55DKOEMInwysQwFXdHYcsqk6O1MsqEdtCUQLMI/edit?gid=0#gid=0"
        >
          click here
        </a>
      </h4>
    </div>
  );
}

export default EmailList;
