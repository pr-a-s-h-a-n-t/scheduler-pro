import React, {useState} from "react";
import {Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
import {Link, useNavigate} from 'react-router-dom';


const SidebarHOC = () => {
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
        <div style={{display: 'flex', height: '100%', minHeight: '400px'}}>
            <Sidebar collapsed={collapsed} collapsedWidth="60px" transitionDuration={1000}>
                <Menu>
                    <MenuItem> Documentation</MenuItem>
                    <MenuItem> Calendar</MenuItem>
                    <MenuItem> E-commerce</MenuItem>
                    <MenuItem> Examples</MenuItem>
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
                </div>
            </main>
        </div>
    );
}
export default SidebarHOC;