import React, { Component } from "react";

export default class EmailList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      message: "",
    };
    this.scriptURL =
      "https://script.google.com/macros/s/AKfycbzil6gtA73tBDAzmfkru7WkEamYW2ahE84i86OAdcyrx2kN3SqMk38xn028fEgLEJDl/exec";
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", this.state.email);

    fetch(this.scriptURL, { method: "POST", body: formData })
      .then((response) => {
        this.setState({ message: "Thanks for subscribing", email: "" });
        setTimeout(() => this.setState({ message: "" }), 5000);
      })
      .catch((error) => console.error("Error!", error.message));
  };

  handleChange = (e) => {
    this.setState({ email: e.target.value });
  };

  render() {
    return (
      <div style={{ marginLeft: "500px", marginTop: "50px" }}>
        <div style={{ marginRight: "20px", color: "green", textAlign: "center" }}>
          <h2> Email-Response</h2>
        </div>

        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button type="submit" style={{ backgroundColor: "red", color: "white" }}>
            Subscribe
          </button>
        </form>
        <span id="msg">{this.state.message}</span>
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
}
