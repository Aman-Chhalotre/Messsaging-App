import React, { useState, useEffect } from 'react'
import '../css/Chat.css'
import send_button from '../assets/images/send_button.png'
import useUser from '../context/userContext'



function Chat() {
  const myName = 'myname'
  const [rotate, setrotate] = useState(false)
  const [typeMessage, setTypeMessage] = useState()
  const [message, setMessage] = useState([])
  const { user } = useUser()


  return (
    <>
      <div id='container'>

        <div id='outer_container'>

          <div id='inner_container'>
            {message.map((m) =>
              <div id={`${(m.name === myName) ? 'chat_container_me' : 'chat_container'}`}>
                <p className='chatbubble'>
                  <p>{m.message}<h6></h6></p>
                </p>
              </div>
            )}


          </div>
          <div id='message_field'>
            <i className='fa-regular fa-face-grin'></i>
            <i id='plus' className='fa-solid fa-plus' onClick={() => { setrotate(!rotate) }} ></i>
            <form onSubmit={(e) => { e.preventDefault(); setMessage((prev) => [...prev, { name: "myname", message: typeMessage }]); setTypeMessage('') }}>
              <input type="text" value={typeMessage} name="type message" id="message" placeholder='Type a message'
                onChange={(e) => { setTypeMessage(e.target.value) }} />
              <button type='submit'><img src={send_button} alt="send button" /></button>
            </form>
          </div>

        </div>

      </div>
    </>
  )
}

export default Chat