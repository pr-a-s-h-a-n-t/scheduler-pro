import {useState} from "react";
import {Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
import {useNavigate} from 'react-router-dom';
import styles from "./SideBar.module.css";
// import Avtar from "../../../assets/avtar.png"

const SidebarHOC = ({child}) => {
    const naviagteUser = useNavigate();
    const [collapsed, setCollapsed] = useState(false);

    const pages = [

        {
            title: "Task",
            link: "/task"
        },

    ]

    const handleNavigator = (path) => {
        naviagteUser(path)
    }

    return (
        <div className={styles.nav_wrapper}>
            <Sidebar className={styles.sidebar} collapsed={collapsed} collapsedWidth="60px" transitionDuration={1000}>
                {!collapsed && <div className={styles.user_profile}>
                    <img src={""} width={"100%"} height={"100%"} style={{borderRadius: "50%"}}/>
                </div>}

                    <Menu className={styles.menu_wrapper} style={{marginTop: collapsed ? "20vh" : "5vh"}}>
                        <MenuItem> Task List</MenuItem>
                        <MenuItem> Calendar</MenuItem>
                        <MenuItem> Completed</MenuItem>
                        {
                            pages?.map((ele, index) => {
                                return (
                                    <MenuItem onClick={() => handleNavigator(ele.link)} key={index}>{ele.title}</MenuItem>
                                )
                            })
                        }
                    </Menu>

            </Sidebar>
            <main style={{padding: 10}}>
                <div>
                    <button className="sb-button" onClick={() => setCollapsed(!collapsed)}>
                        Collapse
                    </button>
                    {child}
                </div>
            </main>
        </div>
    );
}
export default SidebarHOC;