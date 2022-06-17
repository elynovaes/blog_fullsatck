import React from 'react'

const Notification = ({ message, timeAnimation }) => {
  if (message.includes('ERROR')) {
    return (
      <div className={`${timeAnimation === false ? 'top-0 opacity-0' : 'top-5 opacity-100' } fixed text-white text-xl bg-red-600 border-2 border-red-700 px-4 py-1 rounded-xl right-1/2 tranform translate-x-1/2 transition-all duration-700`}>
        {message[1]}
      </div>
    )
  }

  return (
    <div className={`${timeAnimation === false ? 'top-0 opacity-0' : 'top-5 opacity-100' } fixed text-white text-xl z-50 bg-green-600 border-2 border-green-700 px-4 py-1 rounded-xl right-1/2 tranform translate-x-1/2 transition-all duration-700`}>
      {message[1]}
    </div>
  )
} 

export default Notification