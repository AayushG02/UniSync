import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import ChatIcon from "@mui/icons-material/Chat";
import AssessmentIcon from "@mui/icons-material/Assessment";
import "./Sidebar.css";

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  return (
    <div className="sidebar-container">
      <img src="" alt="" className="sidebar-logo" />
      <div className="sidebar-item">
        <HomeIcon className="sidebar-icon" /> Home
      </div>
      <div className="sidebar-item">
        <FolderIcon className="sidebar-icon" />
        My Projects
      </div>
      <div className="sidebar-item">
        <ChatIcon className="sidebar-icon" />
        Chat
      </div>
      <div className="sidebar-item">
        <AssessmentIcon className="sidebar-icon" />
        Analytics
      </div>
      <div className="sidebar-item">
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
