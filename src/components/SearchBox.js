
import React from 'react'; 

const SearchBox = (props) => {
  return (
    <div className = 'pa2'>
      <input 
        className = 'pa3 ba b--yellow bg-washed-yellow'
        type='search' 
        placeholder= 'Search RoboPlayers'
        onChange={props.searchChange}
      />
    </div>
  );
}

export default SearchBox; 