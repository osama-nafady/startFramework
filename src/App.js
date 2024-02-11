import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';

let routers = createBrowserRouter([
  {
path:'', element: <Layout/>, children: [
  {index:true, element: <Home/>},
  {path:'about', element: <About/>},
]
}]);

export default function App() {
  return <>
  
    <RouterProvider router={routers}></RouterProvider>
  </>
}
