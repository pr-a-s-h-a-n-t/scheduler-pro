import {useEffect, useState} from "react";
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai";
import styles from "./Auth.module.css";
import calenderIcon from "../../assets/login.png";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../api/account.js";
import {showToast} from "../../utils/Notification.jsx";

const Login = () => {
    const dispatch = useDispatch();
    const initialState = {
        email: "",
        password: "",
    };

    const navigateUser = useNavigate();

    const {
        userResponse,
        loading,
    } = useSelector(state => state.account)

    const [reqBody, setReqBody] = useState(initialState);
    const [isVisible, setIsVisible] = useState(false);

    const handleReqBodyChange = (name, val) => {
        setReqBody((prevState) => ({
            ...prevState,
            [name]: val,
        }));
    };

    const handleSubmit = () => {
        dispatch(login(reqBody));
    };

    useEffect(() => {

        if (userResponse?.status) performLoginOperations(userResponse?.data);
        else showToast(userResponse?.message, "success");

    }, [userResponse]);

    const performLoginOperations = (data) => {
        const {email, userId, name} = data;
        const extractedData = {
            email: email,
            userId: userId,
            name: name,
        };

        try {
            window.localStorage.setItem("userData", JSON.stringify(extractedData));
            showToast(userResponse?.message, "success");
            navigateUser("/dashboard")
            console.log("Login success")
        } catch (error) {
            console.error("Error saving user data to localStorage:", error);
            showToast("An error occurred during login.", "error");
        }
    };


    return (
        <div className={styles.login}>
            <div className={styles.calender_icons}>
                <img src={calenderIcon} alt="calender icon"/>
            </div>
            <div className={styles.inner}>
                <input
                    className={styles.input}
                    type="email"
                    placeholder="Enter Email"
                    value={reqBody.email}
                    onChange={(e) => handleReqBodyChange("email", e.target.value)}
                />
                <div className={styles.password_container}>
                    <input
                        className={`${styles.password_input} ${styles.input}`}
                        type={isVisible ? "text" : "password"}
                        placeholder="Enter Password"
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
                    Login
                </button>
                <div>
                    <span>Don't have an account?</span>
                    <strong
                        className={styles.signUp_clk}
                        onClick={() => navigateUser("/signup")}
                    >
                        Sign up
                    </strong>
                </div>
            </div>
        </div>
    );
};

export default Login;
