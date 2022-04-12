import React , {useEffect,useState,createContext} from 'react';
import { getProducts } from '../services/api';

export const ProductContext=createContext();

const ProductContextProvider = (props) => {

    const [products,setProducts] = useState([]);

    useEffect(async()=>{
        // const fetchApi=async()=>{
        //     setProducts(await getProducts());
        // }
        // fetchApi();
        setProducts(await getProducts());
        
    },[]);

    return (
        <ProductContext.Provider value={products}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;