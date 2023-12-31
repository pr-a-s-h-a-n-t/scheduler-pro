import {
    Navigate,
    Route,
    Routes, useNavigate,
} from "react-router-dom";
import {
    LazyLanding,
    LazyList,
    LazyLogin,
    LazySideBar,
    LazySignUp,
    LazyScheduleTaskNow
} from "./LazyNav.js";
import {useEffect} from "react";
import {isAuth} from "../utils/isAuth.js";


function Navs() {
    const navigateUser = useNavigate();

    // check if the user is logged in or not!.
    useEffect(() => {
        const userData = JSON.parse(window.localStorage.getItem("userData"))
        if (userData) navigateUser('/dashboard') //YES

    }, []);


    const ProtectedRoute = ({user, children}) => {
        if (!user) {
            return <Navigate to="/login" replace/>;
        }
        return children;
    };

    return (

        <Routes>
            <Route index
                   element={<LazyLanding/>}
            />
            <Route
                path="/login"
                element={<LazyLogin/>}
            />
            <Route
                path="/signup"
                element={<LazySignUp/>}
            />
            <Route
                path="/dashboard/schedule"
                element={
                    <ProtectedRoute user={isAuth()}>
                        <LazySideBar child={<LazyScheduleTaskNow />}/>
                    </ProtectedRoute>
                }
            />
            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute user={isAuth()}>
                        <LazySideBar child={<LazyList/>}/>
                    </ProtectedRoute>
                }
            />
        </Routes>

    )
}

export default Navs;