import axios from "axios"
const baseUrl = '/api/images'

const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then(result => {
    return result.data
  })
}

const uploadImage = async (newObj) => {
  const response = await axios.post(baseUrl, newObj)
  return response.data
}

const deleteImage = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.data
}

const data = { getAll, uploadImage, deleteImage }

export default data