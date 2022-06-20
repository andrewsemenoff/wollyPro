import React from 'react'
import styled from 'styled-components'
import ProductItem from './ProductItem';
import { productsArr } from '../utils/constants';
import { useParams } from 'react-router-dom';


const GalleryContainer = styled.div`
    padding: 20px 0;
    margin: 0 auto;
    width: 60% ;
    height: 100vh ;
    overflow-y: scroll;

    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 1fr));
    grid-template-rows: minmax(300px, 300px);
    gap: 30px;
    &::-webkit-scrollbar{
        width: 0.6vw;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #d4b4d6;
        border-radius: 0.4vw;
    }
    &::-webkit-scrollbar-thumb:hover{
        background-color:#B287B6;
    }
    &::-webkit-scrollbar-track{
        background-color: #F2E6F3;
        border-radius: 0.3vw;
    }
`

const Gallery = () => {
    const {category} = useParams();
    return (
        <GalleryContainer>
           {productsArr.filter(p => p.category === category).map((p, index) => <ProductItem product = {p} key={index}/>)} 
        </GalleryContainer>
    )
}

export default Gallery