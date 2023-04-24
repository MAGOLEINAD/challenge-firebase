import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente, { action as nuevoClienteAction } from './pages/NuevoCliente'
import Index, { loader as clientesLoader} from './pages/Index'
import ErrorPage from './components/ErrorPage'
import { ClientesProvider } from '../context/Context'
import Proyeccion from './pages/Proyeccion'







const router = createBrowserRouter([
  {
    path: '/' ,
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Index/>,
        loader: clientesLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clientes/nuevo' ,
        element: <NuevoCliente/>,
        action: nuevoClienteAction
      },
      {
        path: '/clientes/proyeccion' ,
        element: <Proyeccion/>,
       
      }
    ]
  },
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClientesProvider>
    <RouterProvider router={router}/>
    </ClientesProvider>
  </React.StrictMode>,
)
