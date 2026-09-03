import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Midsection from './components/Midsection'

export default function App() {


  return (
    <div>
      <Header  name="Nitin"/>
      <Midsection dis="Student" />
      <Footer col="red"/>
    </div>
  )
}
