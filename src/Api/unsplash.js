import axios from "axios";


export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID WbNQnOv8sHqulos7WMi2uK3pqSUAzwB6JSdoflsVdZg'
    }

})