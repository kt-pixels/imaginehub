import { useCallback } from 'react'
import './App.css'
import { Footer, Header } from './components'
import {Outlet, useNavigate} from 'react-router-dom'

function App() {

  return (
    <>
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
    </>
  )
}

export default App
