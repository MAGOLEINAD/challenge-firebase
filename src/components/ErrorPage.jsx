import { useRouteError } from 'react-router-dom'


const ErrorPage = () => {
    const error = useRouteError()
  return (
    <>
    <div className='space-y-6'>
    <h1 className="font-black text-4xl text-blue-900 text-center">CRM Clientes </h1>
    <p className='text-center text-3xl'>Hubo el siguiente error</p>
    <p className='text-red-800 text-center font-bold'>{error.message}</p>
    </div>
    </>
  )
}

export default ErrorPage