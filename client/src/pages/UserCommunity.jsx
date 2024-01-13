import React from 'react'

export default function UserCommunity({username,text}) {
  return (
    <div>
      <p className="message-username">{username}</p>
      <p className="message-text">{text}</p>
    </div>
  )
}
