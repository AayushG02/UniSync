import React from "react";
import BookmarkBorderTwoToneIcon from "@mui/icons-material/BookmarkBorderTwoTone";

import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <div className="project-container">
      <div className="project-img-container">
        <img src={props.imgURL} className="project-img" />
      </div>

      <div className="project-details">
        <div className="project-details-top">
          <BookmarkBorderTwoToneIcon
            className="bookmark-icon"
            fontSize="medium"
          />
          <h1 className="project-title">{props.title}</h1>
          <p className="project-uniname">{props.uniName}</p>
        </div>

        <div className="project-details-mid">
          <p className="project-desc">{props.desc.substring(0, 200)} ...</p>
          <div className="project-stack-list">
            {props.stack.map((item) => (
              <div key={item.id} className="project-stack">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="project-details-bottom">
          <p>9/18/2023</p>
          <div className="dot"></div>
          <p>134 Reads</p>
          <div className="dot"></div>
          <p>{props.contributors.length} Contributors</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
