import axios from 'axios'
import Papa from 'papaparse'
export async function list() {
  return axios
    .get(process.env.REACT_APP_API_CSV, {
      responseType: 'blob'
    })
    .then((response) => {
      return new Promise((resolve, reject) => {
        Papa.parse(response.data, {
          header: true,
          complete: (results) => {
            return resolve(results.data)
          },
          error: (error) => {
            return reject(error.message)
          }
        })
      })
    })
}
