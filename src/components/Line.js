import React, { useState } from "react";

function Line(props) {
  let { symbol, title } = props;
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <>
      <li
        className="line"
        onClick={() => {
          console.log(symbol);
          // create a dummy html tag input with value symbol
          let dummy = document.createElement("input");
          document.body.appendChild(dummy);

          // Set its ID
          dummy.setAttribute("id", "dummy_id");

          // Output the array into it
          document.getElementById("dummy_id").value = symbol;

          // Select it
          dummy.select();

          // Copy its contents
          document.execCommand("copy");

          // Remove it as its not needed anymore
          document.body.removeChild(dummy);
        }}
        onMouseOver={() => {
          setMouseOver(true);
        }}
        onMouseOut={() => {
          setMouseOver(false);
        }}
      >
        <span>{symbol}</span>
        <span className="title">{title}</span>
        <p>{mouseOver && "Click to copy !"}</p>
      </li>
    </>
  );
}

export default Line;
