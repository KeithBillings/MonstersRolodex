import { Component } from "react";
// import { useEffect, useState } from 'react';
import "./App.css";
import CardList from "./components/card-list/card-list"; // functional component import

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search for Monsters"
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

// function App() {
//   const [users, setUsers] = useState([]);
//   const [searchField, setSearchField] = useState("");

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(users => setUsers(users))
//   }, []);

//   useEffect(() => {
//     console.log(searchField)
//   }, [searchField]);

//   return (
//     <div className="App">
//       <input
//         type="search"
//         placeholder="Search for Monsters"
//         onChange={(e) => setSearchField(e.target.value)}
//       />
//       <CardList monsters={users} />
//     </div>
//   )
// }

export default App;
