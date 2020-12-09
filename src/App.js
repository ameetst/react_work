import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
    co_names: [],
    searchfield: ''
   };

   //this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState( { co_names : users } ));
  }
  
  handleChange = (e) => {
      this.setState({ searchfield: e.target.value})
  }
  
   render() {

    const { co_names, searchfield } = this.state;
    const filtered_cos = co_names.filter( co_name => 
        co_name.name.toLowerCase().includes(searchfield.toLowerCase())
    )

    return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox 
        placeholder='Search...'
        handleChange={this.handleChange}
      />
      <CardList child_co_names= {filtered_cos}>
      </CardList>
    </div>  
    ) ;
  }
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React  
        </a>
      </header>
    </div>
  );
}
*/
export default App;
