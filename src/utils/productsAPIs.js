const { default: axiosClient } = require("./axiosClient");

const getLatestProducts = ()=>axiosClient.get('/products?populate=*')
const getProductID = (id)=>axiosClient.get(`/products/${id}?populate=*`)

export default {
    getLatestProducts,
    getProductID,
}