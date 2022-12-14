import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import apiHandler from "../../api/apiHandler";
import { useNavigate } from "react-router-dom";
import useAuth from "../../auth/useAuth";

const FormEditProfile = () => {
  // Set the default value as current value from the user

  const { currentUser, authenticateUser } = useAuth();
  const [values, handleChange] = useForm({
    name: currentUser.name,
    username: currentUser.username,
    phone: currentUser.phone,
    age: currentUser.age,
    twitter: currentUser.twitter,
    instagram: currentUser.instagram,
    displayEmail: currentUser.displayEmail,
    picture: currentUser.picture,
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData();
    for (const key in values) {
      fd.append(key, values[key]);
      if (values[key] === "") {
        return setError({ message: "All fields are required" });
      }
    }

    // Handle the profile edit

    apiHandler
      .updateProfile(fd)
      .then(async () => {
        await authenticateUser();
        navigate("/profile");
      })
      .catch((e) => {
        setError(e.response.data);
      });
  };

  return (
    <div className="container">
      {error && <h3 className="error">{error.message}</h3>}
      <form className="formEditProfile" onSubmit={handleSubmit}>
        <h2>Update your profile</h2>
        <div className="labelInput">
          <label htmlFor="name">name</label>
          <input
            type="string"
            id="name"
            name="name"
            onChange={handleChange}
            value={values.name}
          />
        </div>
        <div className="labelInput">
          <label htmlFor="username">username</label>
          <input
            type="string"
            id="username"
            name="username"
            onChange={handleChange}
            value={values.username}
          />
        </div>
        <div className="labelInput">
          <label htmlFor="phone">phone</label>
          <input
            type="number"
            id="phone"
            name="phone"
            onChange={handleChange}
            value={values.phone}
          />
        </div>
        <div className="labelInput">
          <label htmlFor="age">age</label>
          <input
            type="number"
            id="age"
            name="age"
            onChange={handleChange}
            value={values.age}
          />
        </div>
        <div className="labelInput">
          <label htmlFor="twitter">twitter</label>
          <input
            type="string"
            id="twitter"
            name="twitter"
            onChange={handleChange}
            value={values.twitter}
          />
        </div>
        <div className="labelInput">
          <label htmlFor="instagram">instagram</label>
          <input
            type="string"
            id="instagram"
            name="instagram"
            onChange={handleChange}
            value={values.instagram}
          />
        </div>
        <div className="labelInput">
          <label htmlFor="displayEmail">displayEmail</label>
          <input
            type="email"
            id="displayEmail"
            name="displayEmail"
            onChange={handleChange}
            value={values.displayEmail}
          />
        </div>
        <div className="labelInput">
          <label htmlFor="picture">Picture</label>
          <input
            type="file"
            id="picture"
            name="picture"
            onChange={handleChange}
          />
        </div>
        <button className="updateProfileBtn">SUBMIT</button>
      </form>
    </div>
  );
};

export default FormEditProfile;
