import { useEffect, useState } from 'react'
import { HashLoader } from 'react-spinners'

import { useAuth } from '../context/authContext'
import Table from './Table'

const Home = () => {
  const { loading } = useAuth()
  const [data, setData] = useState([])
  const getData = async () => {
    const response = await fetch(process.env.REACT_APP_URL2_SHEETS)
    const result = await response.json()
    setData(result)
  }

  useEffect(() => {
    getData()
  }, [])

  if (loading)
    return (
      <HashLoader
        color={'#007ab4'}
        css={{ position: 'absolute', top: '50%', left: '50%' }}
      />
    )
  return (
    <div className="content-center p-8 w-screen h-full mt-28 overflow-x-hidden">
      <Table data={data} />
    </div>
  )
}

export default Home
