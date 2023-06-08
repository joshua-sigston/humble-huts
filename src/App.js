// Router
import {  Route, 
          createBrowserRouter, 
          createRoutesFromElements,
          RouterProvider } from 'react-router-dom'

// Pages
import Home from './pages/Home';
import About from './pages/About';
import VanList, {loader as VanListLoader} from './pages/VanList';
import VanDetails, {loader as VanDetailLoader} from './pages/VanDetails'
import HostDashboard from './pages/host/HostDashboard'
import Reviews from './pages/host/Reviews';
import Income from './pages/host/Income';
import HostVanList, {loader as HostVansLoader} from './pages/host/HostVanList';
import HostVanDetails, {loader as HostVanLoader} from './pages/host/HostVanDetails';
import HostVanInfo from './pages/host/HostVanInfo';
import HostVanPhotos from './pages/host/HostVanPhotos';
import HostVanPricing from './pages/host/HostVanPricing'
import Login, {loginLoader, action as loginAction} from './pages/Login';

// Components
import Layout from './components/Layout';
import HostLayout, {loader as loggedIn} from './components/HostLayout';
import NotFound from './components/NotFound'
import Error from './components/Error';

// Utilities
import { requireAuth } from './utils';

// Styles
import styles from './styles/app-container.module.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} errorElement={<Error />}>
    
    <Route index element={<Home />} />
    <Route path='about' element={<About />} loader={async () => await requireAuth()}/>
    <Route path='login' element={<Login />} loader={loginLoader} action={loginAction}/>

    <Route path='vans' element={<VanList />} loader={VanListLoader} />
    <Route path='vans/:id' element={<VanDetails />} loader={VanDetailLoader}/>
  
  <Route  path='host' 
          element={<HostLayout />} loader={loggedIn}>

    <Route  index 
            element={<HostDashboard />} 
            loader={async () => await requireAuth()}/>
    <Route  path='reviews' element={<Reviews />} 
            loader={async () => await requireAuth()}/>
    <Route  path='income' element={<Income />} 
            loader={async () => await requireAuth()}/>
    <Route  path='my-vans'
            element={<HostVanList />} 
            loader={HostVansLoader}/>

    <Route  path='my-vans/:id' 
            element={<HostVanDetails />}
            loader={HostVanLoader}>
      <Route  index 
              element={<HostVanInfo />}
              loader={async() => { return null}}/>
      <Route  path='pricing' 
              element={<HostVanPricing />}
              loader={async() => { return null}}/>
      <Route  path='photos' 
              element={<HostVanPhotos />}
              loader={async() => { return null}}/>
    </Route>
  </Route>

  <Route path='*' element={<NotFound />}/>
  </Route>
));

function App() {
  return (
    <div className={styles.app_container}>
      <RouterProvider router={router} />
    </div>
    
  );
}

export default App;
