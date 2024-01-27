import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import { Home, ImageSaver, AllCtg, Boys } from './components/index.js'
import { FavoritesProvider } from './components/Context/ImageSaveContext.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='/animals' element={<AllCtg />} />
      <Route path='/boys-images' element={<Boys />} />
      {/* <Route path='/about' element={<About />} />
      <Route path='/pictures' element={<Pictures />} /> */}
      <Route path='/favorate' element={<ImageSaver />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  </React.StrictMode>,
)
