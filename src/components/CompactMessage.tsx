import React from 'react'
import styled from 'styled-components'
import SvgStar from '../iconComponents/Star'
import { AuthorsArr } from '../utils/constants'
const Wrapper = styled.div`
    display: flex ;
    align-items: center;
    justify-content: space-between ;
    padding: 1em;
    gap: 1em;
`
const MessageFrame = styled.div`
    flex: 0 5 auto;
    width: 100%;
    height: 3em;
    border: 1px solid #70707059;
    font-family: 'Montserrat', sans-serif;
    font-size: 1em;
    color: #707070;
    background-color: white;
    transition: all .1s ease-in-out;
    padding: .3em 1em;
    overflow: hidden;
    border-radius: .2em;

    &:hover{
        cursor: pointer;
        transform: translateX(.5em);
        background-color: #F5EFE0;
    }
`
const ContactAvatar = styled.img`
    flex: 2 0 auto;
    width: 3em ;
    height: 3em;
    border-radius: 50%;
    background-color: plum;
    overflow: hidden; 
    object-fit: cover;
`
const Star = styled(SvgStar)`
fill: ${props => props.fill ?? 'none'};
stroke: #B287B6;
width: 2em;
`

const CompactMessage = () => {
  return (
    <Wrapper>
        <ContactAvatar src={AuthorsArr[3].image}/>
        <MessageFrame>

Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut expedita non, reiciendis libero omnis, vitae nesciunt facere unde magnam, voluptatum animi nulla id nemo ipsa tenetur corrupti dolor asperiores deleniti veritatis. Odit ullam quod nulla ab modi natus ea neque praesentium reprehenderit, fugit quam vero explicabo dignissimos a vel omnis?
        </MessageFrame>
        <Star fill='#B287B6'/>
    </Wrapper>
  )
}

export default CompactMessage