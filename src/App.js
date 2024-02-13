import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contacts from './components/Contacts/Contacts';

let routers = createBrowserRouter([
  {
path:'', element: <Layout/>, children: [
  {index:true, element: <Home/>},
  {path:'about', element: <About/>},
  {path:'portfolio', element: <Portfolio/>},
  {path:'contact', element: <Contacts/>},
]
}]);

export default function App() {
  return <>
  
    <RouterProvider router={routers}></RouterProvider>
  </>
}
