import React from 'react';




const Jumbotron = (props) => {
  return (
    <div className="jumbotron">
      <h1 className="display-3">
        { props.title }
      </h1>
      <p className="lead">
        { props.tagline }
      </p>
    </div>
  );
};




export default Jumbotron;







