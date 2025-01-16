import React from "react";
import axios from "axios"
import { BASE_URL } from "../../constant";
const Menu = () => {
  const [products, setProducts] = useState([]);



const getProduct = async () => {
    try {
        const res = await axios.get(`${BASE_URL}`)
        
    } catch (error) {
        console.log(error);
        
    }
}







  return <>
  
  </>;
};

export default Menu;
