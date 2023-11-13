import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/Store.js";
import "./index.css";
import CentralNavigation from "./navigation/CentralNavigation.jsx";
import CentralLoader from "./components/CentralLoader";
import 'rsuite/dist/rsuite.min.css';
import {Toaster} from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Suspense fallback={<CentralLoader/>}>
                    <CentralNavigation />
                    <Toaster />
                </Suspense>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
