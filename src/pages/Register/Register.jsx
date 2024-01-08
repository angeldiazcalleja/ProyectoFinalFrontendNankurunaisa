import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../services/apiCalls";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../userSlice";
import Inputs from "../../common/Input/Input";
import { validate } from "../../services/useFul";
import "./Register.css";

export const RegisterUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  const [registerDetails, setRegisterDetails] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "customer", // Default role, you can change it as needed
  });

  const [userError, setUserError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
    phoneError: "",
  });

  const inputHandler = (e) => {
    setRegisterDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const checkError = (e) => {
    let error = validate(e.target.name, e.target.value);

    setUserError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error,
    }));
  };

  const registerHandler = () => {
    if (!userError.nameError && !userError.emailError && !userError.passwordError && !userError.phoneError) {
      registerUser(registerDetails)
        .then((res) => {
          const token = res.data.token ? jwtDecode(res.data.token.toString()) : null;
          dispatch(userLogin({ credentials: {}, token }));
          setMsg(`Account created successfully! Please log in.`);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleGoToLogIn = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="containerSign">
        {msg !== "" ? (
          <div className="containerMsg">
            <div className="msgDesign">{msg}</div>
          </div>
        ) : (
          <>
            <div className="cardSign0">
              <div className="cardSign1">
                <div className="textSign">
                  <p>SIGN UP</p>
                </div>
                <div className="changeLogIn">
                  <p>
                    Already a member?{" "}
                    <span className="changeLogInText" onClick={handleGoToLogIn}>
                      Log In
                    </span>
                  </p>
                </div>
                <Inputs
                  text="Name"
                  type="name"
                  name="name"
                  className={`inputLogin ${userError.nameError !== "" ? "inputDesignError" : ""}`}
                  handler={inputHandler}
                  functionError={checkError}
                />
                <div className="errorRedMsg">{userError.nameError}</div>
                <Inputs
                  text="Email ID"
                  type="email"
                  name="email"
                  className={`inputLogin ${userError.emailError !== "" ? "inputDesignError" : ""}`}
                  handler={inputHandler}
                  functionError={checkError}
                />
                <div className="errorRedMsg">{userError.emailError}</div>
                <Inputs
                  text="Password"
                  type="password"
                  name="password"
                  className={`inputLogin ${userError.passwordError !== "" ? "inputDesignError" : ""}`}
                  handler={inputHandler}
                  functionError={checkError}
                />
                <div className="errorRedMsg">{userError.passwordError}</div>
                <Inputs
                  text="Phone"
                  type="Prone"
                  name="phone"
                  className={`inputLogin ${userError.phoneError !== "" ? "inputDesignError" : ""}`}
                  handler={inputHandler}
                  functionError={checkError}
                />
                <div className="errorRedMsg">{userError.phoneError}</div>
                <label className="labelRegister" htmlFor="role">Select Role:</label>
                <select name="role" onChange={inputHandler} value={registerDetails.role}>
                  <option value="customer">Customer</option>
                  <option value="personalAssistant">Personal Assistant</option>
                </select>
                <button className="buttonSignUp" onClick={registerHandler}>
                  🌀 SIGN UP 🌀
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
