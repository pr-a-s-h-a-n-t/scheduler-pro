import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import styles from "./Auth.module.css";
import signUp from "../../assets/signup.png";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const navigateUser = useNavigate();

  const [reqBody, setReqBody] = useState(initialState);
  const [isVisible, setIsVisible] = useState(false);

  const handleReqBodyChange = (name, val) => {
    setReqBody((prevState) => ({
      ...prevState,
      [name]: val,
    }));
  };

  const handleSubmit = () => {
    console.log("dispatch signup");
  };

  return (
    <div className={styles.login}>
      <div className={styles.calender_icons}>
        <img src={signUp} alt="sign up" />
      </div>
      <div className={styles.inner}>
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
