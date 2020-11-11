import { FETCH_PRODUCTS } from "../types"

export const fetchProducts =()=> async(dispatch)=> {

    const res = await fetch("http://localhost:5001/api/products")
    const data = await res.json();
    console.log(data,"sd")
    dispatch({
        type: FETCH_PRODUCTS,
        payload:data,
    });
}