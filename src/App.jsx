import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CentralNavigation from "./navigation/CentralNavigation";
import MainLanding from "./pages/landingPage/MainLanding";
import TaskList from "./pages/dashboard/TaskList.jsx";

function App() {
    return (
        <>
             <CentralNavigation />
            {/*<TaskList/>*/}
        </>
    );
}

export default App;
