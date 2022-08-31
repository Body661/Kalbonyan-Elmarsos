import React, { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [text, setText] = useState(false);

  const showText = () => {
    setText((prevState) => {
      return !prevState;
    });
  };

  return (
    <div>
      <h2>Hello World</h2>
      {!text && <Output>It's good to see you</Output>}
      {text && <Output>New text</Output>}
      <button onClick={showText}>Show p</button>
    </div>
  );
};

export default Greeting;
