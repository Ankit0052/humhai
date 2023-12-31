import axios from "axios"
const ServerURL = "http://10.0.2.2:4000"

const getData = async (url) => {
    try {
        var response = await axios.get(`${ServerURL}/${url}`)
        var result = await response.data
        return result
    }
    catch (e) 
    { return null }
}
const postData = async (url,body) => {
    try {
        var response = await axios.post(`${ServerURL}/${url}`,body)
        var result = await response.data
        return result
    }
    catch (e) 
    { return null }
}

export{ServerURL,getData,postData}
