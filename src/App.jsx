import logo from './logo.svg';
import './App.css';
import Portfolio from './Components/Portfolio/Portfolio.jsx'
import Contact from './Components/Contact/Contact.jsx'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Layout from './Components/Layout/Layout.jsx';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound.jsx';

let routers = createHashRouter([
  {
    path: '', element: <Layout />, children: [

      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: '*', element: <NotFound /> }

    ]
  }
])

function App() {
  return <>

    <RouterProvider router={routers}></RouterProvider>

  </>
}

export default App;
