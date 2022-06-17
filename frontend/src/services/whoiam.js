import axios from "axios"
const baseUrl = '/api/whoiam'

const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then(result => {
    return result.data
  })
}
    
const updateWhoiam = async (updatedObject) => {
  const response = await axios.put(`${baseUrl}/${updatedObject.id}`, updatedObject)
  return response.data
}

const data = { getAll, updateWhoiam }

export default data