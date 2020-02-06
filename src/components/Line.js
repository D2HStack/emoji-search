import React from "react";

function Line(props) {
  const { symbol, title } = props;
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
      >
        <span>{symbol}</span>
        <span className="title">{title}</span>
      </li>
    </>
  );
}

export default Line;
