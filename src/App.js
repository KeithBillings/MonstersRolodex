import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component"; // functional component import
// import {CardList} from "./components/card-list/card-list.component"; // arrow function version

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
      <CardList name={"Keith"}> {/* props */}
        Billings {/* children */}
      </CardList>
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
