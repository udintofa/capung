import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Product from './components/Product'
import Braket from './components/Braket'

function App() {

  return (
    <div>
      <div style={{marginBottom: '100px'}}>
        <Navbar/>
      </div>
      <div className='container-fluid' style={{position: 'fixed', top: "100px", height: '480px'}}>
        <Header/>
      </div>
      <div style={{position: 'relative', top: '500px'}}>
        <Product/>
      </div>
    </div>
  )
}

export default App
