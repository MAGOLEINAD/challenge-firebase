const Formulario = () => {
    return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="nombre"
                >Nombre:</label>
                <input 
                    id="nombre"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del Cliente"
                    name="nombre"
                    required
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
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Apellido del Cliente"
                    name="apellido"
                    required
                    
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
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Edad del Cliente"
                    name="edad"
                    min={1}
                    max={130}
                    required
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
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Fecha del Cliente"
                    name="fecha"
                    required
                />
            </div>

     
        </>
    )
}

export default Formulario