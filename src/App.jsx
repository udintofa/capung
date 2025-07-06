import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Product from './components/Product'
import Braket from './components/Braket'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      {/* Navbar */}
      <Navbar/>

      {/* Header */}
      <div className='container-fluid' style={{position: 'fixed', top: "90px"}}>
        <Header/>
      </div>

      {/* Product */}
      <div style={{position: 'relative', top: '580px'}}>
        <Product/>
        <Footer/>
      </div>

      {/* Footer */}
      <div style={{position: 'relative', bottom: '0px'}}>
      </div>
    </div>
  )
}

export default App
