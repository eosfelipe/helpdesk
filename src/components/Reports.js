import { useEffect, useState } from 'react'
import { HashLoader } from 'react-spinners'

import { useAuth } from '../context/authContext'
import Pagination from './Pagination'
import Table from './Table'

const Reports = () => {
  const { loading } = useAuth()
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage] = useState(10)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const getData = async () => {
    const response = await fetch(process.env.REACT_APP_URL2_SHEETS)
    const result = await response.json()
    setData(result.slice(0).reverse())
  }

  useEffect(() => {
    getData()
  }, [])

  // Get current rows
  const indexOfLastRow = currentPage * rowsPerPage
  const indexOfFirstRow = indexOfLastRow - rowsPerPage
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow)

  if (loading)
    return (
      <HashLoader
        color={'#007ab4'}
        css={{ position: 'absolute', top: '50%', left: '50%' }}
      />
    )
  return (
    <div className="content-center p-8 w-screen h-full mt-28 overflow-x-hidden">
      <Table data={currentRows} />
      <Pagination
        rowsPerPage={rowsPerPage}
        totalRows={data.length}
        paginate={paginate}
      />
    </div>
  )
}

export default Reports
