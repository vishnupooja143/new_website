import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Validate Form
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    }

    if (!formData.mobile) {
      tempErrors.mobile = "Mobile number is required";
      isValid = false;
    }

    if (!formData.message) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
    
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form Submitted Successfully!");
      console.log("Form Data:", formData);

      // clear form
      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: ""
      });
    }
  };

  return (
    <div style={{ width: "400px", margin: "40px auto" }}>
      <h2>React Entry Form</h2>

      <form onSubmit={handleSubmit}>

        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.name}</p>

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.email}</p>

        <label>Mobile:</label>
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.mobile}</p>

        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <p style={{ color: "red" }}>{errors.message}</p>

        <button type="submit" style={{ marginTop: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
