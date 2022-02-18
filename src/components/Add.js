import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { useAuth } from '../context/authContext'

const Add = () => {
  const INITIAL_STATE = {
    id: '',
    fecha: '',
    solicitante: '',
    area: '',
    atendio: '',
    tipo: '',
    problema: '',
    solucion: ''
  }
  const [data, setData] = useState(INITIAL_STATE)
  const [isSubmit, setIsSubmit] = useState(false)
  const { user } = useAuth()
  const navigate = useNavigate()
  const handleChange = ({ target: { name, value } }) => {
    setData({
      ...data,
      id: uuidv4(),
      fecha: new Date().toLocaleString(),
      atendio: user.displayName || user.email,
      [name]: value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmit(true)
    try {
      const response = await fetch(process.env.REACT_APP_URL2_SHEETS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(data)
      })
      await response.json()
      setData(INITIAL_STATE)
      setIsSubmit(false)
      if (response.status === 429) {
        console.log('Too many requests :(')
      }
      if (response.ok) {
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="w-full flex justify-center relative top-24">
      <div className="code-preview rounded-xl bg-gradient-to-r bg-white border border-gray-200 p-8 sm:p-6 m-10 md:w-1/2 mt-10 w-full">
        <h1 className="text-3xl text-gray-500 pb-4 mb-4">Nuevo reporte</h1>
        <form onSubmit={handleSubmit}>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="solicitante"
              className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <label
              htmlFor="solicitante"
              className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Solicitante
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="area"
              className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <label
              htmlFor="area"
              className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Área
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <select
              type="text"
              name="tipo"
              className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              aria-label="Default select"
              onChange={handleChange}
              required
            >
              <option className="text-gray-500" defaultChecked>
                Seleccionar
              </option>
              <option className="text-gray-500" value="operativo">
                Operativo
              </option>
              <option className="text-gray-500" value="sistema">
                Sistema
              </option>
            </select>
            <label
              htmlFor="tipo"
              className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Tipo
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <textarea
              type="problema"
              name="problema"
              className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={handleChange}
              required
            ></textarea>
            <label
              htmlFor="problema"
              className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Problema
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <textarea
              type="solucion"
              name="solucion"
              className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={handleChange}
              required
            ></textarea>
            <label
              htmlFor="solucion"
              className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Solución
            </label>
          </div>

          <button
            type="submit"
            className={`${
              isSubmit
                ? 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center opacity-50 cursor-not-allowed'
                : 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center'
            }`}
          >
            Aceptar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Add
