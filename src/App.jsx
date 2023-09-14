import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import CharacterDetail from './Components/CharacterDetail/CharacterDetail';



function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characterDetail/:slug" element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
