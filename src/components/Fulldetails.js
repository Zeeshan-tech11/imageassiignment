import React from 'react'

function Fulldetails({user}) {
  return (
    <div className='fdetails'>
        <div className='left'>
            <img src={user.picture.large}></img>
        </div>
        <div className='right'>
        <h1>{user.name.title+" "}{user.name.first+" "}{user.name.last}</h1>
        <p><span style={{color:'grey',marginRight:10}}>{user.location.street.number}</span>
         <span>{user.location.city+" "}{user.location.state+" "}{user.location.country+" "}{user.location.postcode}</span>
        </p>
        {user.location.timezone.offset+" "}{user.location.timezone.description+" "}
        <p>

        </p>
        <p style={{color:'grey'}}>{user.gender}</p>
        </div>
    </div>
  )
}

export default Fulldetails