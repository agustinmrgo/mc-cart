import { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { func } from "prop-types";

const RegistrationForm = ({ onNextStep }) => {
  const [registrationData, setRegistrationData] = useState(
    sessionStorage.registrationData
      ? JSON.parse(sessionStorage.registrationData)
      : {
          name: "Jane Doe",
          address: "1234 Neat Street",
        }
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    onNextStep();
  };

  const handleFieldChange = ({ target: { name, value } }) => {
    const newRegistrationData = { ...registrationData, [name]: value };
    setRegistrationData(newRegistrationData);
    sessionStorage.setItem(
      "registrationData",
      JSON.stringify(newRegistrationData)
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          name="name"
          value={registrationData.name}
          onChange={handleFieldChange}
        />
      </div>

      <div>
        <label htmlFor="name">Street Address</label>
        <br />
        <textarea
          type="text"
          name="address"
          value={registrationData.address}
          onChange={handleFieldChange}
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

RegistrationForm.propTypes = {
  onNextStep: func.isRequired,
};

export default RegistrationForm;
