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
  return <image src={props.imgSrc} width="40" hight="40" />;
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

window.API = {
  fetchFriends() {
    return new Promise((res, req) => {
      const friends = ["Alice", "Bob", "Carol", "Ernst"];
      setTimeout(() => res(friends), 2000);
    });
  }
};

//class based component
class Friendslist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { friends: [], input: "" };
  }

  handleRemoveFriend(name) {
    this.setState(currentState => {
      return {
        friends: currentState.friends.filter(friend => friend !== name)
      };
    });
  }

  componentDidMount() {
    window.API.fetchFriends().then(friends => {
      this.setState({
        friends: friends
      });
    });
    // this.setState({
    //   friends: ["Alice", "Bob", "Carol"]
    // })
  }

  handleAddFriend(name) {
    this.setState(currentState => {
      return {
        friends: currentState.friends.concat([name]),
        input: ""
      };
    });
  }

  updateNewFriendName(event) {
    const value = event.target.value;
    this.setState({
      input: value
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
                Remove
              </button>
            </li>
          ))}
        </ul>
        <h4>Add a new freind:</h4>
        <input
          type="text"
          placeholder="Enter friend name"
          vaule={this.state.input}
          onChange={event => this.updateNewFriendName(event)}
        />
        <button onClick={() => this.handleAddFriend(this.state.input)}>
          Add Friend
        </button>
      </div>
    );
  }
}

function App(props) {
  return (
    <div>
      <Name name="Karl-Heinz Weidmann" />
      <Handle handle="@kweidmann" />
      <Avatar imgSrc="https://avatars2.githubusercontent.com/u/31845616?s=460&v=4" />
      <Friendslist />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(App(), rootElement);
