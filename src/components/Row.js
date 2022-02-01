import { Link } from 'react-router-dom'

const Row = ({ value: { id, fecha, atendio, solicitante, area, tipo } }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{fecha}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{atendio}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{solicitante}</div>
        <div className="text-sm text-gray-500">Área: {area}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            tipo === 'operativo'
              ? 'bg-red-100 text-red-800'
              : 'bg-blue-100 text-blue-800'
          }`}
        >
          {tipo}
        </span>
      </td>
      {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        Admin
      </td> */}
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <Link to={`/`} className="text-indigo-600 hover:text-indigo-900">
          View
        </Link>
      </td>
    </tr>
  )
}

export default Row
