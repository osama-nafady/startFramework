import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout';

let routers = createBrowserRouter([
  {
path:'', element: <Layout/>, children: [
  {}
]
}]);

export default function App() {
  return <RouterProvider router={routers}></RouterProvider>
}
