
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Pages/Home'
import AlbumDetails from './Pages/AlbumDetails'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/albums/:id' element={<AlbumDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
