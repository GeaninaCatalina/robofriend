import React from 'react'; 

const SearchBox = () => {
  return (
    <div className = 'pa2'>
    <input 
          className = 'pa3 ba b--green bg-lightest-blue'
          type='search' 
          placeholder = 'Search RoboPlayers'
    />
    </div>
  );
}

export default SearchBox; 