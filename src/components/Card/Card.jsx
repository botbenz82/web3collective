import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import "./Card.css";

const Card = ({ title, coverImage, description, url, index }) => {
  return (
    <div key={index} className="card">
      <div className="card-img">
        <a href={url}>
          <img src={coverImage} alt="resource image" />
        </a>
      </div>

      <div className="card-info">
        <div className="title-link">
          <h2>{title} </h2>

          <a className="url-icon" href={url}>
            <BiLinkExternal />
          </a>
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Card;