import axios from "axios"
const baseUrl = '/api/posts'

const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then(result => {
    return result.data
  })
}
 
const create = async (newObj) => {
  const response = await axios.post(baseUrl, newObj)
  return response.data
}

const update = async (updatedObject) => {
  const response = await axios.put(`${baseUrl}/${updatedObject.id}`, updatedObject)
  return response.data
}

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

const data = { getAll, create, update, remove }

export default data