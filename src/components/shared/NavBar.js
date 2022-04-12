import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContexProvider';
import shop from '../../assests/icons/shop.svg';
import styles from './NavBar.module.css';

const NavBar = () => {

    const {state}=useContext(CartContext);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products">products</Link>
                <div className={styles.iconContainer}>
                    <Link to="/cart"><img src={shop} alt="shop" /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
            
            
        </div>
    );
};

export default NavBar;