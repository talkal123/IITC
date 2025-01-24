import { useEffect, useState } from 'react'
import axios from "axios"

const useAxios = (param) => {

    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    axios.defaults.baseURL = 'https://api.coingecko.com/api/v3'

    const fetchData = async (param) => {
        try {
            setLoading(true)
            const result = await axios(param)
            setResponse(result.data)
        } catch (error) {
            setError(error.message || 'Unknown error')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (param) {
            fetchData(param)
        }
    }, [param])

    return {
        response,
        error,
        loading
    }
}

// השתמש ב-named export במקום default export
export { useAxios }

























// import { useEffect, useState } from 'react'
// import axios from "axios"



// const useAxios = (param) => {

//     const [response, setResponse] = useState(null)
//     const [loading, setLoading] = useState(false)
//     const [error, setError] = useState('')

//     axios.defaults.baseURL = 'https://api.coingecko.com/api/v3'

//     const fetchData = async (param) => {
//         try {
//             setLoading(true); 
//           const result = await axios(param)
//           setResponse(result.data)
//         } catch (error) {
//             setError(error);
//         } finally{
//             setLoading(false);
//         }
//     }


//     useEffect(() => {
//         if (param) {
//           fetchData();
//         }
//       }, [param]);

//   return {
//     response , error ,loading
//   }
   
  
// }

// export default useAxios
