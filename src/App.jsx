import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import About from './components/about'
import Webest from './components/webest'
import Products from './components/products'
import Ourlocation from './components/ourlocation'
import Mumbai from './components/mumbai'
import Certificate from './components/certificate'
import Customer from './components/customer'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<Header/>
<Navbar/>
<Hero/>
<About/>  
<Webest/>
<Products/>
<Ourlocation/>
<Mumbai/>
<Certificate/>
<Customer/>
<Footer/>
</>
  )
}

export default App
