import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
  }

  showModal = () => {
    this.setState({ modalIsOpen: true })
  }
  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <CSSTransition
          in={this.state.modalIsOpen}
          timeout={300}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log('enter')}
          onEntering={() => console.log('onEntering')}
          onEntered={() => console.log('onEntered')}
          onExit={() => console.log('onExit')}
          onExiting={() => console.log('onExiting')}
          onExited={() => console.log('onExited')}
          classNames='fase-slide'
        >
            <Modal closed={this.closeModal} />
        </CSSTransition>
        <Backdrop show={this.state.modalIsOpen} />
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div >
    );
  }
}

export default App;
