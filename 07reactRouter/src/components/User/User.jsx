import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='w-2/5 h-8 pt-1 m-auto my-auto text-center text-white bg-gray-700'>User: {userid}</div>
  )
}

export default User