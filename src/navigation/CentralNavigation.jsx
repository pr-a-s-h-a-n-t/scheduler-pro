import React, {useContext} from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import {LazyLanding, LazyLogin, LazySideBar, LazySignUp} from "./LazyNav.js";


function Navs() {


    return (

        <Routes>
            <Route path="/" element={<LazyLanding/>}/>
            <Route
                path="/login"
                element={<LazyLogin/>}
            />
            <Route
                path="/signup"
                element={<LazySignUp/>}
            />
            <Route
                path="/dashboard/testing"
                element={
                    <LazySideBar>
                        <div> this is test component.</div>
                    </LazySideBar>
                }
            />
            <Route
                path="/dashboard"
                element={<LazySideBar/>}
            />
        </Routes>

    )
}

export default Navs;