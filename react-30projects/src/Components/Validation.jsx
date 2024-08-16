import React, { Component } from "react";
import "../App.css";

export default class Validation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        fullName: "",
        phoneNo: "",
        emailId: "",
        message: "",
      },
      formErrors: {
        fullName: "",
        phoneNo: "",
        emailId: "",
        message: "",
      },
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formValues: {
        ...prevState.formValues,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, phoneNo, emailId, message } = this.state.formValues;

    const namePattern = /^[a-zA-Z\s]+$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phonePattern = /^\d{10}$/;

    let errors = {};

    if (!fullName || !namePattern.test(fullName)) {
      errors.fullName = "Name invalid. Only letters and spaces allowed.";
    }

    if (!phoneNo || !phonePattern.test(phoneNo)) {
      errors.phoneNo = "Phone number invalid. It should be 10 digits.";
    }

    if (!emailId || !emailPattern.test(emailId)) {
      errors.emailId = "Email invalid.";
    }

    if (!message || message.length <= 30) {
      errors.message = "Message must be at least 30 characters long.";
    }

    this.setState({ formErrors: errors });

    if (Object.keys(errors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  render() {
    const { formValues, formErrors } = this.state;

    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your name"
            value={formValues.fullName}
            onChange={this.handleChange}
          />
          <span className="error">{formErrors.fullName}</span><br />

          <label htmlFor="phoneNo">Phone No.</label>
          <input
            type="text"
            id="phoneNo"
            name="phoneNo"
            placeholder="123 456 7890"
            value={formValues.phoneNo}
            onChange={this.handleChange}
          />
          <span className="error">{formErrors.phoneNo}</span><br />

          <label htmlFor="emailId">Email ID</label>
          <input
            type="text"
            id="emailId"
            name="emailId"
            placeholder="Enter your email"
            value={formValues.emailId}
            onChange={this.handleChange}
          />
          <span className="error">{formErrors.emailId}</span><br />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            value={formValues.message}
            onChange={this.handleChange}
          />
          <span className="error">{formErrors.message}</span><br />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
