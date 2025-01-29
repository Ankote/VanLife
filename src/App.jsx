import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Components/pages/Home'
import About from './Components/pages/About'
import Header from './Components/Header'
import Vans from './Components/pages/Vans'

function App() {

  return (
    <>
		<BrowserRouter>

			<Header/>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/vans' element={<Vans />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</BrowserRouter>
    </>
  )
}

export default App
