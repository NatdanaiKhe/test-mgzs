import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Menu from './components/Menu'
import Main from './components/Main'
import Footer from './components/Footer'
import Exterior from './components/Exterior'
import Interior from './components/Interior'
import Performance from './components/Performance'

function App() {
  return (
    <>
      <Menu />
      <Main />
      <Exterior />
      <Interior />
      <Performance />
      <Footer />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
