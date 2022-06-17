import axios from "axios"
const baseUrl = '/api/home'

const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then(result => {
    return result.data
  })
}
    
const updateHome = async (updatedObject) => {
  const response = await axios.put(`${baseUrl}/${updatedObject.id}`, updatedObject)
  return response.data
}

const uploadImage = async (newObj) => {
  const response = await axios.post(`${baseUrl}/images`, newObj)
  return response.data
}


const data = { getAll, updateHome, uploadImage}

export default data