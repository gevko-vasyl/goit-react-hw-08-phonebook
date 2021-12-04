import React from "react";
import { Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import Phonebook from "./pages/Phonebook/Phonebook";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { PublicRoute } from "./routes/PublicRoute";
import { PrivateRoute } from "./routes/PrivateRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { currentUser } from "./redux/auth/authOperations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <div className="App">
      <AppBar />
      <Routes>
        <Route path="/" element={<PrivateRoute component={Home} />} />

        <Route path="/login" element={<PublicRoute component={Login} />} />

        <Route path="/register" element={<PublicRoute component={SignUp} />} />

        <Route
          path="/contacts"
          element={<PrivateRoute component={Phonebook} />}
        />
      </Routes>
    </div>
  );
}

export default App;
