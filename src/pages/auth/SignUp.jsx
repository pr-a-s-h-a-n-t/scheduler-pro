import React, { useEffect, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import styles from "./Auth.module.css";
import signUpIcon from "../../assets/signup.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupRequest } from "../../store/action/account";
import { signup } from "../../api/account";

const Signup = () => {
  const initialState = {
    name: "",
    email: "",
    mobile: "",
    password: "",
  };
  const dispatch = useDispatch();
  const navigateUser = useNavigate();

  const [reqBody, setReqBody] = useState(initialState);
  const [isVisible, setIsVisible] = useState(false);

  const handleReqBodyChange = (name, val) => {
    console.log(name, val);
    setReqBody((prevState) => ({
      ...prevState,
      [name]: name === "mobile" ? parseInt(val) : val,
    }));
  };

  const handleSubmit = () => {
    dispatch(signup(reqBody));
  };

  useEffect(() => {
    console.log("req", reqBody);
  }, [reqBody]);

  return (
    <div className={styles.login}>
      <div className={styles.calender_icons}>
        <img src={signUpIcon} alt="sign up" />
      </div>
      <div className={styles.inner}>
        <input
          className={styles.input}
          type="text"
          placeholder="Set Name"
          value={reqBody.name}
          onChange={(e) => handleReqBodyChange("name", e.target.value)}
        />
        <input
          className={styles.input}
          type="number"
          placeholder="Set Mobile Number"
          value={reqBody.mobile}
          onChange={(e) => handleReqBodyChange("mobile", e.target.value)}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Set Email"
          value={reqBody.email}
          onChange={(e) => handleReqBodyChange("email", e.target.value)}
        />
        <div className={styles.password_container}>
          <input
            className={`${styles.password_input} ${styles.input}`}
            type={isVisible ? "text" : "password"}
            placeholder="Set Password"
            value={reqBody.password}
            onChange={(e) => handleReqBodyChange("password", e.target.value)}
          />
          {isVisible ? (
            <AiFillEye
              className={styles.eye_icon}
              size={20}
              style={{
                color: reqBody?.password?.length > 0 ? "black" : "grey",
              }}
              onClick={() => setIsVisible(false)}
            />
          ) : (
            <AiFillEyeInvisible
              className={styles.eye_icon}
              size={20}
              style={{
                color: reqBody?.password?.length > 0 ? "black" : "grey",
                cursor: reqBody?.password?.length > 0 ? "pointer" : "default",
              }}
              onClick={() =>
                reqBody?.password?.length > 0 && setIsVisible(true)
              }
            />
          )}
        </div>

        <button className={styles.btn} onClick={handleSubmit}>
          Signup
        </button>
        <div>
          Already have an account?{" "}
          <strong
            className={styles.signUp_clk}
            onClick={() => navigateUser("/login")}
          >
            Login
          </strong>
        </div>
      </div>
    </div>
  );
};

export default Signup;
