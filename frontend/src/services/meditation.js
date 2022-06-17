import axios from "axios"
const baseUrl = '/api/meditation'

const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then(result => {
    return result.data
  })
}
    
const updateMeditation = async (updatedObject) => {
  const response = await axios.put(`${baseUrl}/${updatedObject.id}`, updatedObject)
  return response.data
}

const data = { getAll, updateMeditation }

export default data