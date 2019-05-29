import React from "react";

function Result(props) {
  return (
    <div className="card">
      <div className="card-header card-header-styles">{props.title}</div>
      <div className="card-body">
        <img
          src={props.image}
          alt={props.title}
          style={{ float: "left" }}
          className="img-thumbnail"
        />

        <button
          onClick={props.saveBook}
          className="btn btn-primary results-btn"
        >
          SAVE
        </button>
        <p className="card-text"> Authors(s): {props.authors}.</p>
        <p className="card-text">
          {" "}
          Google Link:{" "}
          <a href={props.link} target={"_blank"}>
            {props.title}
          </a>
        </p>
        <p className="card-text"> Description: {props.description}</p>
      </div>
    </div>
  );
}

export default Result;
