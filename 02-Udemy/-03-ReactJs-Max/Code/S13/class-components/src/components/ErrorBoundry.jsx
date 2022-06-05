import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  componentDidCatch(error) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError === true) {
      return <p>Something Went worng</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
