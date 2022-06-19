import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { productsArr } from '../utils/constants';

interface ProductItemProps {
    product: { name: string, images: string[], notation?: string, price?: number },
}
interface ItemProps {
    image: string;
}

const Item = styled.div<ItemProps>(({ image }) => `
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-item: center;
    gap: 5px;
    max-width: 300px;
    min-width: 200px;
    height: 300px;
    border-radius: 20px;
    background-image: url(${image});
    background-size: auto 100% ;
    background-position: center center;
   
    &:hover{
        transform: scale(1.1);
    } 
    &:hover > div{
        color: #802882;  
    }

`);

const ProductTitle = styled.div`
    text-align: left;
    color: #FEFEFE;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 1.2em;
`
const ProductNotation = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8em;
    color: white;
`
const ProductPrice = styled.div`
    text-align: end;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 1em;
`


const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    return (
        <Item image={product.images[0]}>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductNotation>{product.notation}</ProductNotation>
            <ProductPrice>{`$ ${product.price}`}</ProductPrice>
        </Item>
    )
}

export default ProductItem