import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import { productsArr } from '../utils/constants'
import AuthorBar from './AuthorBar';
import JewelPart from './JewelPart';
import SlideGallery from './SlideGallery';
interface PictureProps {
    image: string;
}

const Container = styled.div`
    padding: 0.5em 0;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 70vw;
    height: fit-content;
    /* background-color: #53c7c7; */
`
const ComponentsBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7em;
    justify-content: space-between;
    width: 9%;
`
const SlideGalleryWrapper = styled.div`
    width: 71%;
`

const ProductConstructor = () => {
    const { productID } = useParams()
    const  currentProduct = productsArr.find(p => p.id === Number(productID))
    const { jevelParts, authorID } = currentProduct!;
    return (
        <Container>
            <ComponentsBar>
                {jevelParts!.map((p, index) =>
                    <JewelPart
                        image={p}
                        key={index}
                    />)}
            </ComponentsBar>
            <SlideGalleryWrapper>
                <SlideGallery />
            </SlideGalleryWrapper>
            <AuthorBar authorId={authorID} />
        </Container>
    )
}

export default ProductConstructor;