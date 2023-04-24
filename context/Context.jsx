/* eslint-disable react/prop-types */
import {createContext, useState} from 'react'


const ClientesContext = createContext()

const ClientesProvider = ({children}) => {
    const [modal, setModal] = useState(false)
    const [clientes,setClientes] = useState([])
    const [cliente,setCliente] = useState({})
return (
    <ClientesContext.Provider 
    value={{
        modal,
        setModal,
        clientes,
        setClientes,
        cliente,
        setCliente
        
    }}>
            {children}
    </ClientesContext.Provider>
)
}

export {ClientesProvider}
export default ClientesContext