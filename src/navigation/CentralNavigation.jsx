import {
    Navigate,
    Route,
    Routes, useNavigate,
} from "react-router-dom";
import {LazyLanding, LazyList, LazyLogin, LazySideBar, LazySignUp} from "./LazyNav.js";
import {useEffect} from "react";
import {isAuth} from "../utils/isAuth.js";


function Navs() {
    const navigateUser = useNavigate();

    // check if the user is logged in or not!.
    useEffect(() => {
        const userData = JSON.parse(window.localStorage.getItem("userData"))
        if (userData) navigateUser('/dashboard') //YES

    }, []);

    const ProtectedRoute = ({user}) => {
        if (!user) {
            return <Navigate  index replace/>;
        }
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
                path="/dashboard/scheduler"
                element={
                    <ProtectedRoute user={isAuth()}>
                        <LazySideBar child={<div> this is Scheduler Page.</div>}/>
                    </ProtectedRoute>
                }
            />
            <Route
                path="/dashboard"
                element={
                    // <ProtectedRoute user={true}>
                        <LazySideBar child={<div>Routing test!</div>}/>
                    // </ProtectedRoute>
                }
            />
        </Routes>

    )
}

export default Navs;