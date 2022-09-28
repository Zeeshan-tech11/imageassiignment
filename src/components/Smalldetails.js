import React from 'react'

function Smalldetails({user}) {
  return (
    <div className='smbox'>
        <p>{user.gender}{' '}{user.nat}</p>
        <h2>{user.name.title} {user.name.first}{user.name.last}</h2>
        <p style={{color:'red'}}>{user.email}</p>
    </div>
  )
}

export default Smalldetails