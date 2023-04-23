import { borrarCliente } from "../api/clientes"

/* eslint-disable react/prop-types */

const Cliente = ({cliente}) => {
    const {nombre,apellido,edad,fecha} = cliente
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
      <button onClick={borrarCliente} className="p-6 text-xs text-red-800  font-bold uppercase ">Eliminar</button>
      </div>
    </td>
  </tr>
  )
}

export default Cliente