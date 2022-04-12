import React,{useContext} from 'react';
import { ProductContext } from '../context/ProductContextProvider';
import { Link ,useParams } from 'react-router-dom';
import styles from './ProductDetails.module.css';


const ProductDetails = () => {
    const params=useParams();
    const data=useContext(ProductContext);
    const id=params.id;
    const {image,title,description,price,category}= data [id - 1];
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="product" />
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>category:</span> {category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price}$</span>
                    <Link to="/products">Back to products</Link>
                </div>
            </div> 
        </div>
    );
};

export default ProductDetails;