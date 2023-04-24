import {useContext} from 'react'
import ClientesContext from '../context/Context'

const useClientesContext = () => {
   return useContext(ClientesContext)
}

export default useClientesContext