import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp (){
  return(
    <div>
    <h1>Custome App for Chai</h1>
  </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit GOOGLE'
// }

// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Visit Google Baba</a>
// )

const anotherUser = "Chai aur Code"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank' },
  'Click here to visit Google Baba',
  anotherUser
)


createRoot(document.getElementById('root')).render(
  reactElement
);