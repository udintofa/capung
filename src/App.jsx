import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Product from './components/Product'
import Braket from './components/Braket'
import Footer from './components/Footer'
import Header2 from './components/Header2'

function App() {

  return (
    <div>
      {/* Navbar */}
      <Navbar/>

      {/* Header */}
      <div className='container-fluid' style={{position: 'fixed', top: "72px"}}>
        <Header2/>
      </div>

      {/* Product */}
      <div style={{position: 'relative', top: '520px'}}>
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
