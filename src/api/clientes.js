

import { collection, getDocs,addDoc,deleteDoc,doc} from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config";


export async function borrarCliente(id,setClientes,clientes) {
  try {
     await deleteDoc(doc(FirebaseDB, "clientes", id));
     setClientes(clientes.filter((cliente) => cliente.id !== id));

      console.log("Cliente Borrado");
    } catch (e) {
      console.error("No pude borrar Cliente: ", e);
    }
}


export async function agregarCliente(datos) {
    try {
        const cliente = await addDoc(collection(FirebaseDB, "clientes"), {
         ...datos
        });
        console.log("Cliente agregado con ID: ", cliente.id);
      } catch (e) {
        console.error("Error al agregar Cliente: ", e);
      }
}

//Peticion a Firebase

      
export const obtenerClientes = async () => {
    const respuesta = await getDocs(collection(FirebaseDB, "clientes"));
    const arrayDeClientes = [];
    respuesta.forEach((doc) => {
    arrayDeClientes.push({...doc.data(),id:doc.id});
    });

    return arrayDeClientes;
  }



  //JSON SERVER
// export const obtenerClientes = async () => {
//   const respuesta = await fetch(import.meta.env.VITE_API_URL);
//   const resultado = await respuesta.json();
//   return resultado;
// };

// export async function agregarCliente(datos) {
//     try {
//         const respuesta = await fetch(import.meta.env.VITE_API_URL, {
//             method: 'POST',
//             body: JSON.stringify(datos),
//             headers: {
//                 'Content-Type':'application/json'
//             }
//         })
//         await respuesta.json()
       
//     } catch (error) {
//         console.log(error);
//     }
// }