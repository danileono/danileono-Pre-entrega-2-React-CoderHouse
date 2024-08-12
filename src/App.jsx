import './App.css'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavigationBar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    
    <BrowserRouter>
      <NavigationBar />
      
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoryName' element={<ItemListContainer/>} />      
        <Route path='/detalle/:id' element={<ItemDetailContainer/>} />          
      </Routes>

    
    </BrowserRouter>
    
  )
}

export default App



