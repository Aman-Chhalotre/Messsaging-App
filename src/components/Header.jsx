import React, { useEffect, useState } from 'react'
import '../css/Header.css'
import profileImage from '../assets/images/profile.jpg'
import useUser from '../context/userContext'
import {users} from '../data/data.js'

function Header() {
  const [username,setUserName] = useState({})
  const {user} = useUser()

  useEffect(()=> {
    for (const data of users) {
      if(data.id === user.id){
        setUserName(data)
      }
    }
  },[user])
  
  return (
    <>
      <nav>
        <div id='profile_image'>
          <img src={profileImage} alt="" />
        </div>
        <div id='chat_image'>
          <img src={username.profileImage} alt="" />
          <h4>{username.userName}</h4>
        </div>
      </nav>
    </>
  )
}

export default Header