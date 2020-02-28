import React from 'react'; 

const Card = () => { 
  const {name, email, id} =props; 
  return (
    <div className='tc bg-light-pink dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='player1' src={`https://robohash.org/${id}$`}/> 
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card; 
