import React, { useState } from 'react'
import '../css/Inbox.css'
import {users} from '../data/data.js'
import useUser from '../context/userContext.js'

function Inbox() {
  const {setUser} = useUser()
  
  return (
    <>
      <div id='inbox_container'>
        <div id='heading'>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder='Search or start new chat' />
        </div>

        <div id='inbox'>
            {users.map((user)=>

            (
            <div id='chatbox' key={user.id} onClick={()=>{setUser(user)}}>
              <img src={user.profileImage} alt="Profile Image" />
              <div>
                <div id='chatbox_name'>
                  <div>
                    <h3>{user.userName}</h3>
                    <h5>4:55 PM</h5>
                  </div>
                  
                </div>
              </div>
            </div>
            )


            )}
            

        </div>

      </div>
    </>
  )
}

export default Inbox