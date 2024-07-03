import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import './index.css'
import Vehicules from './pages/Vehicules.jsx'
import MenuVehiculos from './pages/MenuVehiculos.jsx'
const router = createBrowserRouter([
  {path: "/",element: <App/>},
  {path: "/Principal",element: <Home/>},
  {path: "/Vehicules",element: <Vehicules/>},
  {path: "/MenuVehiculos",element: <MenuVehiculos/>},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
