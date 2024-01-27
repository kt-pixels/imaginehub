import './App.css'
import { Footer, Header } from './components'
import {Outlet} from 'react-router-dom'

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
