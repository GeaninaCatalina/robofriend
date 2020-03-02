import React, { Component } from 'react'; 
import CardList from './CardList'; 
import {robots} from './robots';
import SearchBox from './SearchBox'; 

class App  extends Component { 
  constructor () {
    super();
    this.state = {
      robots: robots, 
      searchField: ''
    }
  }

  onSearch = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const filteredRobots = this.state.robots.filter(robots => robots.name.toLowerCase().includes(this.state.searchField.toLowerCase()));

    return (
      <div className='tc'> 
        <h1>RoboPlayers</h1>
        <SearchBox searchChange={this.onSearch} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
} 

export default App; 