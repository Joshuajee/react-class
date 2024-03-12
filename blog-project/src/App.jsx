import Navbar from './components/Navbar'
import HomePage from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <main>

      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route index={true} element={<HomePage />} />

          <Route path='/latest' element={<HomePage pageInfo={"latest"} />} />

          <Route path='/top' element={<HomePage pageInfo={"top"} />} />

        </Routes>

      </BrowserRouter>


    </main>
  )
}

export default App
