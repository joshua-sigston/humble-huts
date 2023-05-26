// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home';
import About from './pages/About';

// Components
import Header from './components/Header'
function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
