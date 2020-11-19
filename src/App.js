// import { Component } from "react";
import { useEffect, useState } from 'react';
import "./App.css";
import CardList from "./components/card-list/card-list"; // functional component import

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(users => this.setState({ monsters: users }));
//   }

//   render() {
//     return (
//       <div className="App">
//         <CardList monsters={this.state.monsters} />
//       </div>
//     );
//   }
// }

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => setUsers(users))
  }, []);

  return (
    <div className="App">
      <CardList monsters={users} />
    </div>
  )
}

export default App;