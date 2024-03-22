import Navbar from './components/Navbar'
import HomePage from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PostPage from './pages/Post'

function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route  index={true} element={<HomePage />} />

        <Route path='/latest' element={<HomePage pageInfo={"latest"} />} />

        <Route path='/top' element={<HomePage pageInfo={"top"} />} />

        <Route path='/post/:slug' element={<PostPage />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
