import useClientesContext from '../../hook/useContext'
import CerrarBtn from '../img/cerrar.svg'

// eslint-disable-next-line react/prop-types
const Modal = () => {
const {setModal,cliente} = useClientesContext()
// console.log(cliente);
    
    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img 
                    className='cursor-pointer'
                    src={CerrarBtn}
                    alt="cerrar modal"
                    onClick={()=>setModal(false)}
                   
                />
            </div>
         
          <h1 className=' mt-20 mb-10 text-white font-bold text-center text-4xl'>Datos del Cliente</h1>
            <div className="mb-4">
                <label
                    className="labelBlanco"
                    htmlFor="nombre"
                >Nombre:</label>
                <input 
                    id="nombre"
                    type="text"
                    className="mt-2 mx-auto rounded-md block w-1/3 p-3 bg-gray-50 text-black font-semibold space-x-6 text-2xl"
                    placeholder="Nombre del Cliente"
                    name="nombre"
                    value={cliente.nombre}
                    readOnly
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="apellido"
                >Apellido:</label>
                <input 
                    id="apellido"
                    type="text"
                    className="mt-2 mx-auto rounded-md block w-1/3 p-3 bg-gray-50 text-black font-semibold space-x-6 text-2xl"
                    placeholder="Apellido del Cliente"
                    name="apellido"
                    value={cliente.apellido}
                    readOnly
                    
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="edad"
                >Edad:</label>
                <input 
                    id="edad"
                    type="number"
                    className="mt-2 mx-auto rounded-md block w-1/3 p-3 bg-gray-50 text-black font-semibold space-x-6 text-2xl"
                    placeholder="Edad del Cliente"
                    name="edad"
                    required
                    value={cliente.edad}
                    readOnly
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="fecha"
                >Fecha de Nacimiento:</label>
                <input 
                    id="fecha"
                    type="text"
                    className="mt-2 mx-auto rounded-md block w-1/3 p-3 bg-gray-50 text-black font-semibold text-2xl  "
                    placeholder="Fecha del Cliente"
                    name="fecha"
                    value={cliente.fecha}
                    readOnly
                />
            </div>
            <h2 className=' mt-20 mb-10 text-white font-bold text-center text-4xl'>Tu esperanza de vida es de: {76-cliente.edad}</h2>
           
        </div>
    )
}

export default Modal
