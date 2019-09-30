import React, { useImperativeHandle } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Name(props) {
  return <h1 src="name">{props.name}</h1>;
}

function Handle(props) {
  return <h3 id="handle">{props.handle}</h3>;
}

function Avatar(props) {
  return <image src={props.imgSrc} width="40" />;
}

//function based component
// function Friendslist(props){
//   return (
//     <ul>
//       <li>Alice</li>
//       <li>Bob</li>
//       <li>Carlo</li>
//     </ul>
//   )
// }

//class based component
class Friendslist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { friends: ["Alice", "Bob", "Carol"] };
  }

  render() {
    return (
      <ul>
        {this.state.friends.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    );
  }
}

function App(props) {
  return (
    <div>
      <Name name="Karl-Heinz Weidmann" />
      <Handle handle="@kweidmann" />
      <Avatar imgSrc="https://twitter.com/drweidmann/header_photo" />
      <Friendslist />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(App(), rootElement);
