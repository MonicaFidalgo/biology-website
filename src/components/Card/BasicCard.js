import React from "react";
import "./basic-card.scss";

function BasicCard(props) {
  return (
    <div className="basic-card">
      <p className="basic-card__headline">{props.date}</p>

      <a
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        className="basic-card__link"
      >
        <h4>{props.title}</h4>
      </a>
      <p className="basic-card__info">{props.author}</p>
      <div>
        {props.link1 ? (
          <a
            href={props.link1}
            target="_blank"
            rel="noopener noreferrer"
            className="basic-card__link-secondary me-3"
          >
            {props.subtitle1} <i className="fas fa-arrow-right"></i>
          </a>
        ) : null}
        {props.link2 ? (
          <a
            href={props.link2}
            target="_blank"
            rel="noopener noreferrer"
            className="basic-card__link-secondary"
          >
            {props.subtitle2} <i className="fas fa-arrow-right"></i>
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default BasicCard;
