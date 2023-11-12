import {
    Route,
    Routes,
} from "react-router-dom";
import {LazyLanding, LazyList, LazyLogin, LazySideBar, LazySignUp} from "./LazyNav.js";


function Navs() {


    return (

        <Routes>
            <Route index element={<LazyLanding/>}/>
            <Route
                path="/login"
                element={<LazyLogin/>}
            />
            <Route
                path="/signup"
                element={<LazySignUp/>}
            />
            <Route
                path="/dashboard"
                element={
                    <LazySideBar child={<LazyList />}/>
                }
            />
            <Route
                path="/dashboard/scheduler"
                element={
                    <LazySideBar child={<div> this is Scheduler Page.</div>}/>
                }
            />
        </Routes>

    )
}

export default Navs;