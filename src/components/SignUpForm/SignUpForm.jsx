import { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/auth/authOperations";
import "./SignUpForm.scss";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setName("");
    setPassword("");
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ name, email, password }));
    resetForm();
  };

  const nameId = nanoid();
  const passwordId = nanoid();
  const emailId = nanoid();

  return (
    <>
      <form className="SignUpForm" onSubmit={handleSubmit}>
        <label htmlFor={nameId}>
          <p>Name</p>
          <input
            type="text"
            name="name"
            required
            value={name}
            id={nameId}
            onChange={handleChange}
          ></input>
        </label>
        <label htmlFor={emailId}>
          <p>E-mail</p>
          <input
            type="mail"
            name="email"
            required
            value={email}
            id={emailId}
            onChange={handleChange}
          ></input>
        </label>
        <label htmlFor={passwordId}>
          <p>Password</p>
          <input
            type="password"
            name="password"
            required
            value={password}
            id={passwordId}
            onChange={handleChange}
          ></input>
        </label>
        <button className="SignUpForm__button" type="submit">
          Sign up
        </button>
      </form>
    </>
  );
};

export default SignUpForm;
