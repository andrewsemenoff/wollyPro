import React from 'react'

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled from 'styled-components';
import { productsArr } from '../utils/constants';
import SvgBasketReview from '../iconComponents/BasketReview';

interface ItemProps {
    image: string;
}

const SlideContent = styled.div<ItemProps>(({ image }) => `
    padding: 18px 15px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover ;
    background-image: url(${image});
    border-radius: 20px;
`);

const Title = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 1.2em;
    color: #868484;
    margin-bottom: 2em;
`
const Notation = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8em;
    color: #868484;
`
const Price = styled.div`
    text-align: end;
    margin-top: 40%;
    margin-right: 20%;
    color: #EA4680;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 1.7em;
`
const BuyButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5em;
    height: 2em;
    background-color: #4AA9BD;
    border-radius: 0.3em;
    margin-left:auto;
    margin-top: auto;
    &:hover{
        cursor: pointer;
        background-color: #367885;
    }
`
const Curt = styled(SvgBasketReview)`
    fill: #FFFFFF;
    opacity: 0.54;
    ${BuyButton}:hover & {
    opacity: 1;
  }
`

const SlideGallery = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {productsArr[1].images.map((image, index) => <SwiperSlide key={index}>
                <SlideContent image={image}>
                    <Title>{productsArr[1].name}</Title>
                    <Notation>{productsArr[1].notation}</Notation>
                    <Price>{`$ ${productsArr[1].price}`}</Price>
                    <BuyButton>
                    <Curt />
                    </BuyButton>
                </SlideContent>
            </SwiperSlide>)}
        </Swiper>
    )
}

export default SlideGallery