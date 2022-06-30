import React from 'react'
import styled from 'styled-components'
import ProductItem from './ProductItem';
import { productsArr } from '../utils/constants';
import { useParams } from 'react-router-dom';


const GalleryContainer = styled.div`
    padding: 1.5em;
    margin: 0 auto;
    width: 60% ;
    height: 100vh ;
    

    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 1fr));
    grid-template-rows: minmax(300px, 300px);
    gap: 1.5em;

    transition: all 1s ease-out;
    overflow-y: scroll;
    &::-webkit-scrollbar {
    background-color: transparent;
    width: 1em;
    }
    &:hover {
        background-color:#F2E6F3;
        transition: background-color 1s ease-out;
        &::-webkit-scrollbar {
            width: 1em;
            background-color:  #F2E6F3;
            
        }
        &::-webkit-scrollbar-thumb {
            background-color: rgba(0,0,0,.2);
            border-radius: .5em;
        }
        &::-webkit-scrollbar-button {
            background-color: transparent;
            height: .1em ;
        }
}
`

const Gallery = () => {
    const { category } = useParams();
    return (
        <GalleryContainer>
            {productsArr
                .filter(p => p.category === category)
                .map((p, index) =>
                    <ProductItem
                        product={p}
                        key={index}
                    />
                )
            }
        </GalleryContainer>
    )
}

export default Gallery