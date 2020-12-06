import { Component } from "react";
// import { useEffect, useState } from 'react';
import "./App.css";

import SearchBox from "./components/searchbox/searchbox";
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

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1 >Monsters Rolodex</h1>
        <SearchBox placeholder="Search For Monsters" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
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
