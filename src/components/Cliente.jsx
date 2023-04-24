
import { borrarCliente } from "../api/clientes"


/* eslint-disable react/prop-types */

const Cliente = ({cliente,setClientes,clientes}) => {
    const {nombre,apellido,edad,fecha,id} = cliente
    
    
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
      </div>
    </td>
  </tr>
  )
}

export default Cliente