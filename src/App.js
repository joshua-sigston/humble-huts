// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home';
import About from './pages/About';
import HutList from './pages/HutList';
import HutDetails from './pages/HutDetails'
import Host from './pages/host/Host'
import Reviews from './pages/host/Reviews';
import Income from './pages/host/Income';
import HostHutList from './pages/host/HostHutList';
import HostHutDetails from './pages/host/HostHutDetails';

// Components
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';
import HostHutDetailLayout from './components/HostHutDetailLayout';

// Styles
import styles from './styles/app-container.module.css'

function App() {
  return (
    <BrowserRouter>
    <div className={styles.app_container}>
      <Routes>
        <Route path='/' element={<Layout />}>

          <Route index element={<Home />}/>
          <Route path='about' element={<About />} />

          <Route path='huts'>
            <Route index element={<HutList />} />
            <Route path=':id' element={<HutDetails />} />
          </Route>
        
        <Route path='host' element={<HostLayout/>}>
          <Route index element={<Host />} />
          <Route path='reviews' element={<Reviews />} />
          <Route path='income' element={<Income />} />
          <Route path='my-huts' element={<HostHutList />} />
          <Route path='my-huts/:id' element={<HostHutDetails />} />
        </Route>

        {/* <Route path='my-huts/:id' element={<HostHutDetailLayout/>}>
          
        </Route> */}

        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
