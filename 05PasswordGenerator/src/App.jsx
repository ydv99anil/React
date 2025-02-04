import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null);
  const CopyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 35)
  }, 
  [password])

  const passwordGenerator = useCallback(
    () => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if(numAllowed) str += "0123456789"
      if(charAllowed) str += "!@~#$%&*({[]})"

      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1); 
        pass += str.charAt(char);
      }
      setPassword(pass)
    }, 
    [length, numAllowed, charAllowed, setPassword,]
  );

  useEffect(()=>{
    passwordGenerator()},
    [length, numAllowed, charAllowed, setPassword, passwordGenerator]
  );
 
  
  return (
    <>
      <div className='w-full max-w-md mx-auto mt-4 absolute top-4 left-1/2 transform -translate-x-1/2 shadow-md rounded-lg px-5 py-2  text-orange-500 bg-gray-700'> 
        <h1 className='text-white text-center my-2 text-xl'>Password Generator</h1>
        <div className='flex  overflow-hidden mb-4  rounded'>
          <input 
          type="text" 
          value={password}
          className="outline-none w-full py-1 px-3 rounded-l-lg"
          style={{backgroundColor: "white"}}
          placeholder='Password'
          readOnly
          ref={passRef}
          />
          <button 
          className="w-1/5 outline-none bg-blue-800 text-white px-3 py-1 shrink-0 rounded-none rounded-r-lg z-10
          hover:bg-blue-900 active:scale-95 transition duration-200
          focus:outline-none focus:ring-0"
          onClick={CopyPasswordToClipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range" 
              min={6}
              max={35} 
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label> 
          </div>
          <div className='flex items-center gap-x-1'>

            <input 
              type="checkbox" 
              defaultChecked={numAllowed}
              id='numInput'
              onChange={() => {
                setNumAllowed((prev)=>!prev);
              }}
            />
            <label htmlFor='numInput'>Number</label>

            <input 
              type="checkbox" 
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => {
                setCharAllowed((prev)=>!prev);
              }}
            />
            <label htmlFor='charInput'>Character</label>

          </div>
        </div>
      </div>
      
    </>
  )
}

export default App 