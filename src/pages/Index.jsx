import { useLoaderData } from "react-router-dom"
import Cliente from "../components/Cliente";
import { obtenerClientes } from "../api/clientes";
import { std } from 'mathjs';



//Peticion Api via Loader de React Router
export function loader() {
  const datos = obtenerClientes()
  return datos
}



const Index = () => {
  //Obtencion de Datos de api mediante el Hook de React Router
  const clientes = useLoaderData()
  const promedioEdad = clientes.reduce((acumulador, cliente) => acumulador + Number(cliente.edad), 0) / clientes.length;
  const edadesClientes = clientes.map (cliente => cliente.edad)
  const desvioEstandar = std(edadesClientes).toFixed(2)

  console.log(clientes);
  return (
    <>
    <h1 className="font-black text-4xl text-blue-900">Clientes </h1>
    <p className="mt-3">Administra tus Clientes</p>
    {clientes.length ? (<>
      <table className="w-full bg-white shadow mt-5 ">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Apellido</th>
            <th className="p-2">Edad</th>
            <th className="p-2">Fecha Nacimiento</th>
            <th className="p-2">Accion</th>
          </tr>
        </thead>
       <tbody>
        {clientes.map (cliente => (
            <Cliente cliente={cliente} key={cliente.nombre} />
        ))}
       </tbody>
      </table>
        <div className="flex mt-10 justify-between border border-gray-500 p-6">
        <h1 className=" font-bold text-2xl ">Promedio de Edad: <span className="text-blue-700">{promedioEdad.toFixed(2)}</span> </h1>
        <h1 className=" font-bold text-2xl ">Desviación estándar de edades: <span className="text-blue-700">{desvioEstandar}</span> </h1>
      </div>
      </>
    ) : (
    <p className='mt-2'>No hay clientes todavia</p>
    )
    }
  
    </>
  )
}

export default Index