/* eslint-disable no-undef */

import prImage from './assets/daikin-aire.jpg'; // with import
import { useState } from 'react';

export const ProductCard = ({ children, prPrice }) => {

    const altImage = `${children} imagen`
    const [comprado, setComprado] = useState(false);

    const comprarProd = () => {
        setComprado(!comprado)
    }

    const compradoText = comprado ? "Comprado" : "Comprar"
    const compradoClass = comprado ? 'button-18 comprado' : 'button-18'

    return (
        <article className="nb-productCard">
            <img alt={altImage} src={prImage} />
            <div className="nb-productCard-info">
                <div className='nb-productCard-pricing'>
                    <h4>{children}</h4>
                    <span>${prPrice}</span>
                </div>
                <button className={compradoClass} onClick={comprarProd} role="button">{compradoText}</button>
            </div>
        </article>
    )
} 

export const ProductContainer = ({ children }) => {
    return (
        <div className='nb-productContainer'>
            {children}
        </div>
    )
}