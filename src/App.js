import { Component } from "react";
import "./App.css";
// import { CardList } from "./components/card-list/card-list.component"; // arrow function version
import CardList from "./components/card-list/card-list"; // functional component import

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}/>
      </div>
    );
  }
}

export default App;
