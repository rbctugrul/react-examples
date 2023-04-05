import React from "react";

const MovieControls = () => {
  return (
    <div className="inner-card-controls">
      <button className="ctrl-btn">
        <i className="fa-fw far fa-eye"></i>
      </button>
      <button className="ctrl-btn">
        <i className="fa-fw fa fa-times"></i>
      </button>
    </div>
  );
};

export default MovieControls;
