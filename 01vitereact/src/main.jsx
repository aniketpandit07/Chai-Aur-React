import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function myApp (){
  return (
    <div>
      <h1>This is hurray</h1>
    </div>
  )
}

const anotherEle = (
  <a href="https://facebook.com" target='_blank'>Facebook</a>
)


const reactEle = React.createElement(
  'a',
  {href: 'https://github.com', target: '_blank'},
  'click to visit github'
)


ReactDOM.createRoot(document.getElementById('root')).render(
 
   reactEle

)
