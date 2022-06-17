import axios from "axios"
const baseUrl = '/api/guide'

const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then(result => {
    return result.data
  })
}
    
const updateGuide = async (updatedObject) => {
  const response = await axios.put(`${baseUrl}/${updatedObject.id}`, updatedObject)
  return response.data
}

const data = { getAll, updateGuide }

export default data