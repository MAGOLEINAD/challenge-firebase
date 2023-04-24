

import { useNavigate } from "react-router-dom"
import useClientesContext from "../../hook/useContext"
import { borrarCliente } from "../api/clientes"


/* eslint-disable react/prop-types */

const Cliente = ({cliente,setClientes,clientes}) => {
  const Navigate = useNavigate()
    const {setModal,setCliente} = useClientesContext()
    const {nombre,apellido,edad,fecha,id} = cliente
    //Aqui seteo el estado para que me devuelva un cliente individualizado para luego mostrarlo en Modal.
    
    const modalDetalle = () => {
      setCliente(cliente)
      setModal(true)
    }
    const verProyeccion = () => {
      setCliente(cliente)
      Navigate('clientes/proyeccion')
    }
    
  return (
    <tr className="border-b space-y-2">
    <td className="p-6">
        <p className="text-xl text-gray-800 text-center">{nombre}</p>
    </td>
    <td className="p-6">
        <p className="text-xl text-gray-800 text-center">{apellido}</p>
    </td>
    <td className="p-6">
        <p className="text-xl text-gray-800 text-center">{edad}</p>
    </td>
    <td className="p-6">
    <p className="text-xl text-gray-800 text-center">{fecha}</p>
    </td>
    <td className="p-6">
      <div className="flex items-center justify-center">
      <button onClick={()=>borrarCliente(id,setClientes,clientes)} className="p-6 text-xs text-red-800  font-bold uppercase cursor-pointer ">Eliminar</button>
      <button onClick={modalDetalle} className="p-6 text-xs text-blue-800  font-bold uppercase cursor-pointer ">Detalle</button>
      <button onClick={verProyeccion} className="p-6 text-xs text-indigo-700 font-bold uppercase cursor-pointer ">Proyeccion</button>
      </div>
    </td>
  </tr>
  )
}

export default Cliente