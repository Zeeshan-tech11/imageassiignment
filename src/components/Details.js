import React, { useEffect, useState } from 'react'
import Smalldetails from './Smalldetails'
import Fulldetails from './Fulldetails'
function Details() {
    let[data,setData]=useState([])
    useEffect(()=>{
      fetch('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020')
      .then(res=>res.json())
      .then(data=>{
        setData(data.results)
      })

    },[])
    let [user,setUser]=useState([])
     const showDetails=(user)=>{
        let arr=[]
        arr.push(user)
        setUser(arr)

     }
  return (
    <div className='container'>
        <div className='fulldetails'>
         {user.length>0?<Fulldetails user={user[0]}/>:""}
        </div >
        
        <div className='users'>
        {data.map((user,idx)=>(
        <div  onClick={()=>showDetails(user)}>
          <Smalldetails user={user} key={idx}/>
          </div>
        ))}
        </div>
    </div>
  )
}

export default Details