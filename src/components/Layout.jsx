
import { Link, Outlet, useLocation } from "react-router-dom"







const Layout = () => {
const location = useLocation()
const {pathname} = location


  return (
    <div className="md:flex md:min-h-screen">
    <aside className="md:w-1/4 bg-sky-900 px-5 py-10">
      <h1 className="text-4xl font-black text-center text-white">CRM - Clientes</h1>
    <nav className="mt-10">
      <Link 
      className={`text-2xl block ${pathname === '/' ? 'text-blue-300':' text-white'}  mt-2 hover:text-blue-400`} 
      to="/">Listado de Clientes</Link>
      <Link 
      className={`text-2xl block ${pathname === '/nuevo/cliente' ? 'text-blue-300':' text-white'}  mt-2 hover:text-blue-400`} 
      to="/clientes/nuevo">Nuevo Cliente</Link>
     
    </nav>
    </aside>
    <main className="md:w-3/4 md:h-screen bg-gray-100 overflow-auto p-10" >
    <Outlet/>
    </main>
   
    
    </div>
  )
}

export default Layout