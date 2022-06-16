import axios from "axios"
import { useState } from "react"


const useFetch = async (path) => {
    const [data , setData] = useState()
    
    response = await axios.get(path)
    setData(response.data)
    
    return data
}