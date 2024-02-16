import Header from './components/Header'
import Inbox from './components/Inbox'
import Chat from './components/Chat'
import './App.css'
import React, { useState } from 'react'
import { UserContextProvider } from './context/userContext'



function App() {
  const [chatImage, setchatImage] = useState('')
  const [user, setUser] = useState({})
  
  return (
    <>
      <UserContextProvider value={{user,setUser}}>
      <Header></Header>
      <div id='inbox_chat'>
        <Inbox></Inbox>
        <Chat></Chat>
      </div>
      </UserContextProvider>
    </>
  )
}

export default App
