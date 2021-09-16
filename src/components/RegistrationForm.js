import { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";

const RegistrationForm = ({ onNextStep, onPrevStep }) => {
  const [name, setName] = useState("Jane Doe");
  const [address, setAddress] = useState("1234 Neat Street");

  const handleSubmit = (event) => {
    event.preventDefault();
    onNextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="name">Street Address</label>
        <br />
        <textarea
          type="text"
          name="address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </div>

      <hr />

      <Link to={routes.cart}>
        <button>Cancel</button>
      </Link>
      <button type="submit">Next</button>
    </form>
  );
};

export default RegistrationForm;
