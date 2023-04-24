import { Form, redirect, useNavigate } from "react-router-dom"
import Formulario from "../components/Formulario"
import { agregarCliente } from "../api/clientes"



export  const action = async ({request}) => {
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)
  console.log(datos)
  await agregarCliente(Object.fromEntries(formData))
  return redirect('/')
 
}


const NuevoCliente = () => {

 const navigate = useNavigate()
  return (
    <>
    <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente </h1>
    <p className="mt-3">Llena todos los campos para registrar un nuevo cliente</p>

    <div className="flex justify-end">
      <button 
      onClick={()=> navigate(-1)}
      className="bg-blue-800 text-white Uppercase px-3 py-1 rounded-sm">Volver</button>
    </div>
    <div className="mx-auto w-3/4 bg-white shadow px-5 py-10 mt-20 ">
      <Form 
      
      method="post">
         <Formulario/>
         <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 font-bold text-white text-lg cursor-pointer"
            value="Registrar Cliente"
          />
      </Form>
    </div>
    
    </>
  )
}

export default NuevoCliente