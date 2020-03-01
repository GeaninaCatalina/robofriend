import React,{ Component } from 'react'; 
import CardList from './CardList'; 
import {robots} from './robots';
import SearchBox from './SearchBox'; 
//import { Component } from 'react';

class App  extends Component { 
  constructor () {
    super()
    this.state = {
      robots : robots, 
      searchField : ''
    }
  }

  onSearch = (event) => {
    this.setState({ searchField: event.targ.value});
   
  }

  render () {
    const filteredRobots = this.state.robots.filter(robots => {
    return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    }
    ) 

    return (
      <div className = 'tc'> 
        <h1>RoboPlayers</h1>
        <SearchBox SearchChange = {this.onSearchChange} />
        <CardList robots = {filteredRobots} />
      </div>
    );
  }




} 

export default App; 