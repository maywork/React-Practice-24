import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom App</h1>
//     </div>
//   )
// }

// const anotherElement = (
//   <a href='https://google.com' target='_blank' rel='noreferrer'>Visit Google</a>
// )

// const reactElement = React.createElement(
//   'a',
//   { href: 'https://google.com', target: '_blank' },
//   'clcik me to visit google'
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  // 
  //   <MyApp />
  // < App />
  // reactElement
  // </React.StrictMode>,
  /* anotherElement */
  <React.StrictMode>
    < App />
  </React.StrictMode>
)
