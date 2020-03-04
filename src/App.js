import React, { Component } from 'react'; 
import CardList from './CardList'; 
import SearchBox from './SearchBox'; 
import Scroll from './Scroll'; 


class App  extends Component { 
  constructor () {
    super();
    this.state = {
      robots: [], 
      searchField: ''
    }
  }

  componentDidMount () {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots:users}))
  }

  onSearch = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const filteredRobots = this.state.robots.filter(robots => robots.name.toLowerCase().includes(this.state.searchField.toLowerCase()));

    return (
      <div className='tc'> 
        <h1 className='f1'>RoboPlayers</h1>
        <SearchBox searchChange={this.onSearch}/>
        <Scroll>
          <CardList robots={filteredRobots}/>
        </Scroll>
      </div>
    );
  }
} 

export default App; 