import React, { useState, useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HomeIcon from "@mui/icons-material/Home";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import ChatIcon from "@mui/icons-material/Chat";
import AssessmentIcon from "@mui/icons-material/Assessment";
import "./Sidebar.css";

const Sidebar = () => {
  // const [sidebarVisible, setSidebarVisible] = useState(true);

  return (
    <div className="sidebar-container">
      <div className="sidebar-items">
        <img src="" alt="" className="sidebar-logo" />
        <div className="sidebar-item">
          <HomeIcon fontSize="large" /> <span className="item-text">Home</span>
        </div>
        <div className="sidebar-item">
          <FolderCopyIcon fontSize="large" />{" "}
          <span className="item-text">Projects</span>
        </div>
        <div className="sidebar-item">
          <ChatIcon fontSize="large" /> <span className="item-text">Chat</span>
        </div>
        <div className="sidebar-item">
          <AssessmentIcon fontSize="large" />{" "}
          <span className="item-text">Analytics</span>
        </div>
        <div className="sidebar-item">Logout</div>
      </div>
    </div>
  );
};

//   <div
//     className={`sidebar-container ${
//       sidebarVisible ? "expanded" : "collapsed"
//     } `}
//   >
//     <div
//       className="sidebar-collapse"
//       onClick={() => setSidebarVisible(!sidebarVisible)}
//     >
//       <ArrowForwardIosIcon
//         className="collapse-icon"
//         style={
//           sidebarVisible
//             ? {
//                 transform: "rotate(-180deg)",
//                 transition: "all 150ms ease-in-out",
//               }
//             : {
//                 transform: "rotate(0)",
//                 transition: "all 150ms ease-in-out",
//               }
//         }
//       />
//     </div>

//     <img src="" alt="" className="sidebar-logo" />
//     <div
//       className={`sidebar-item ${
//         sidebarVisible ? "item-expand" : "item-collapse"
//       } `}
//     >
//       <HomeIcon className="sidebar-icon" />
//       {<span>Home</span>}
//     </div>
//     <div
//       className={`sidebar-item ${
//         sidebarVisible ? "item-expand" : "item-collapse"
//       } `}
//     >
//       <FolderCopyIcon className="sidebar-icon" />
//       {<span>My Projects</span>}
//     </div>
//     <div
//       className={`sidebar-item ${
//         sidebarVisible ? "item-expand" : "item-collapse"
//       } `}
//     >
//       <ChatIcon className="sidebar-icon" />
//       {<span>Chat</span>}
//     </div>
//     <div
//       className={`sidebar-item ${
//         sidebarVisible ? "item-expand" : "item-collapse"
//       } `}
//     >
//       <AssessmentIcon className="sidebar-icon" />
//       {<span>Analytics</span>}
//     </div>
//     <div
//       className={`sidebar-item ${
//         sidebarVisible ? "item-expand" : "item-collapse"
//       } `}
//     >
//       {sidebarVisible && <button className="logout-btn">Logout</button>}
//     </div>
//   </div>
// );
// };

export default Sidebar;
