import React from 'react'

function Card({myName="New Person", btnText="Visit Me", att="I Am New One"}) {
    console.log(myName)
    return(
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black mb-3">
        <img
          src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="" 
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {att}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{myName}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
        <button className="mu-1">{ btnText}</button>
      </div>
    )
}

export default Card