import React from "react";

function Line(props) {
  const { symbol, title } = props;
  return (
    <>
      <li className="line">
        <span>{symbol}</span>
        <span className="title">{title}</span>
      </li>
    </>
  );
}

export default Line;
