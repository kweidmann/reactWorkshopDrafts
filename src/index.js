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

  handleRemoveFriend(name) {
    this.setState(currentState => {
      return {
        friends: currentState.friends.filter(friend => friend !== name)
      };
    });
  }

  //<button onClick="alert('there');">Remove</button>

  render() {
    return (
      <div>
        <ul>
          {this.state.friends.map(name => (
            <li key={name}>
              <span>{name}</span>
              <button onClick={() => this.handleRemoveFriend(name)}>
                Reomve{" "}
              </button>
            </li>
          ))}
        </ul>
        <h4>Add a new freind:</h4>
        <input
          type="text"
          placeholder="Enter friend name"
          vaule={this.state.input}
          onChange={this.updateNewFriendName}
        />
        <button>Add Friend</button>
      </div>
    );
  }
}

function App(props) {
  return (
    <div>
      <Name name="Karl-Heinz Weidmann" />
      <Handle handle="@kweidmann" />
      {/* <Avatar imgSrc="https://twitter.com/drweidmann/header_photo" /> */}
      <Friendslist />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(App(), rootElement);
