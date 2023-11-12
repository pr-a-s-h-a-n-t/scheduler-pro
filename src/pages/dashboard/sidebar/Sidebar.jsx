import {useEffect, useState} from "react";
import {Sidebar, Menu} from 'react-pro-sidebar';
import {useLocation, useNavigate} from 'react-router-dom';
import styles from "./SideBar.module.css";
import {FaRegCalendarAlt, FaRegChartBar, FaSignOutAlt} from "react-icons/fa";

const SidebarHOC = ({child}) => {
    const navigateUser = useNavigate();
    const path = useLocation()
    const [collapsed, setCollapsed] = useState(true);
    const [selectedTab, setSelectedTab] = useState("");

    const pages = [
        {
            title: "Dashboard",
            link: "/dashboard",
            icons: 'Dashboard'
        },
        {
            title: "Schedule Now",
            link: "/dashboard/scheduler",
            icons: "Schedule"
        },
    ]

    useEffect(() => {
        const findPath = pages.filter(ele => {
            if (path.pathname === ele.link) {
                return ele;
            }
        })
        // Remove Console in Production.
        console.log("CURRENT PATH==>", path, "AFTER Map Operation", findPath)
        setSelectedTab(findPath[0].title);
    }, [path])

    const handleNavigator = (path, tabTitle) => {
        navigateUser(path);
        setSelectedTab(tabTitle);
    }

    return (
        <div className={styles.nav_wrapper}>
            <Sidebar onMouseEnter={() => setCollapsed(false)} onMouseLeave={() => setCollapsed(true)}
                     className={styles.sidebar} collapsed={collapsed} collapsedWidth="45px" transitionDuration={1000}>
                {
                    !collapsed && <div className={styles.user_profile}>
                        <img src={""} width={"100%"} height={"100%"} style={{borderRadius: "50%"}} alt={"User Image"}/>
                    </div>
                }

                <Menu className={styles.menu_wrapper} style={{marginTop: collapsed ? "20vh" : "5vh"}}>
                    {pages?.map((ele, index) => (
                        <div
                            key={index}
                            className={`${styles.menu_item} ${ele.title === selectedTab ? styles.selected : ""}`}
                            onClick={() => handleNavigator(ele.link, ele.title)}
                        >
                            {ele.icons === "Dashboard" && <span><FaRegChartBar size={26} cursor={"pointer"}/></span>}
                            {ele.icons === "Schedule" && <span><FaRegCalendarAlt size={26} cursor={"pointer"}/></span>}
                            {ele.icons === "Logout" && <span><FaSignOutAlt size={26} cursor={"pointer"}/></span>}
                            <span className={styles.link_title}>{ele.title}</span>
                        </div>
                    ))}
                </Menu>
                <div  className={styles.logout}>
                    <span><FaSignOutAlt size={26} cursor={"pointer"} /></span>
                    <span className={styles.link_title}>Logout</span>
                </div>
            </Sidebar>
            <main className={styles.main_content}>

                    {child}

            </main>
        </div>
    );
}

export default SidebarHOC;
