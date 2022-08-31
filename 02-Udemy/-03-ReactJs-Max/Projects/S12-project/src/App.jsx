import React, { useState, useCallback } from "react";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

const App = () => {
  const [showButton, setShowButton] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  console.log("change app");

  const show = useCallback(() => {
    if (showButton) {
      setShowParagraph((prevState) => !prevState);
    }
  }, [showButton]);

  const toggle = useCallback(
    () => setShowButton((prevState) => !prevState),
    []
  );
  return (
    <div className="app">   
      <h1>Hi there</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggle}> Allow Togglling </Button>
      <Button onClick={show}>Show paragraph</Button>
    </div>
  );
};

export default App;