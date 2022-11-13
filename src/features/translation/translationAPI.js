import axios from "axios"

export  const getTranslation = async()=>{
    const response = await axios.get('/translation')
    return response.data
}
export  const postTranslation = async(data)=>{
    const response = await axios.post(`/translation`,data)
    return response.data
}
export  const putTranslation = async(id,data)=>{
    const response = await axios.put(`/translation/?${id}`,data)
    return response.data
}
export  const deleteTranslation = async(id)=>{
    const response = await axios.put(`/translation/?${id}`)
    return response.data
}