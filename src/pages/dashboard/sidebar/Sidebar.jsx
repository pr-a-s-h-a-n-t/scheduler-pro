// Sidebar.js
import React, { useState } from "react";
import { FiHome, FiActivity, FiSettings } from "react-icons/fi";
import styles from "./Sidebar.module.css"; // Import the CSS module
import Avatar from "../../../assets/login.png";
const Sidebar = ({ Component }) => {
  const [selectedTab, setSelectedTab] = useState("home");

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className={styles.sidebar}>
        <div className={styles.sidebar_prf_icon}>
          <img
            style={{ borderRadius: "50%" }}
            width={"100%"}
            height={"100%"}
            src={Avatar}
            alt="profile icons"
          />
        </div>
        <ul>
          <li
            className={selectedTab === "home" ? styles.active : ""}
            onClick={() => handleTabClick("home")}
          >
            <FiHome /> Home
          </li>
          <li
            className={selectedTab === "activity" ? styles.active : ""}
            onClick={() => handleTabClick("activity")}
          >
            <FiActivity /> Tasks
          </li>
          <li
            className={selectedTab === "settings" ? styles.active : ""}
            onClick={() => handleTabClick("settings")}
          >
            <FiSettings /> Settings
          </li>
        </ul>
      </div>
      <div className={styles.hoc_component_wrapper}>{Component}</div>
    </div>
  );
};

export default Sidebar;
