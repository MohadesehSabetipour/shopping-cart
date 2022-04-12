import React,{useContext} from 'react';
import { shorten , isInCart,quantityCount } from '../../helpers/functions';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContexProvider';
import trash from '../../assests/icons/trash.svg';
import styles from './Product.module.css';

const Product = (props) => {
    const {state,dispatch}=useContext(CartContext);
    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={props.productData.image} alt="product-image" />
            <h3>{shorten(props.productData.title)}</h3>
            <p>{props.productData.price}</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${props.productData.id}`} >details</Link>
                <div className={styles.buttonContainer}>

                    {quantityCount(state,props.productData.id)>1 && <button className={styles.smallButton} onClick={()=>dispatch({type:"DECREASE",payload:props.productData})}>-</button>}
                    {quantityCount(state,props.productData.id)===1 && <button className={styles.smallButton} onClick={()=>dispatch({type:"REMOVE_ITEM",payload:props.productData})}><img src={trash}/></button>}
                    {quantityCount(state,props.productData.id)>0 && <span className={styles.counter}>{quantityCount(state,props.productData.id)}</span>}
            
                    {
                        isInCart(state,props.productData.id) ? <button className={styles.smallButton} onClick={()=>dispatch({type:"INCREASE",payload:props.productData})}>+</button> :
                        <button onClick={()=>dispatch({type:"ADD_ITEM",payload:props.productData})}>Add to cart</button>
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Product;