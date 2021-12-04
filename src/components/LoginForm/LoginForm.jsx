import { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/authOperations";
import "./LoginForm.scss";

function LoginForm() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
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
    setPassword("");
    setEmail("");
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    resetForm();
  };

  const passwordId = nanoid();
  const emailId = nanoid();

  return (
    <form className="LoginForm" onSubmit={submit}>
      <label htmlFor={emailId}>
        <p>E-mail</p>
        <input
          type="mail"
          name="email"
          title="e-mail"
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
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={password}
          id={passwordId}
          onChange={handleChange}
        ></input>
      </label>

      <button className="LoginForm__button" type="submit">
        Log in
      </button>
    </form>
  );
}

export default LoginForm;
