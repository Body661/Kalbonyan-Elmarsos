import React from "react";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
const Welcome = () => {
  return (
    <section>
      <h1>Welcome</h1>
      <Route path="/welcome/new-user">
        <p>Hello new user</p>
      </Route>
    </section>
  );
};

export default Welcome;
