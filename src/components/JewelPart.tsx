import React, { useState } from 'react'
import styled from 'styled-components';
import { CheckMark } from '../iconComponents';
import SvgOk from '../iconComponents/Ok';

interface JevelPartProps {
    image: string;
}
interface Props {
    image: string;
}

const JewelPartItem = styled.div<JevelPartProps>(({ image }) => `
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 100%;
    border-radius: 10px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 190%;
    background-image: url(${image});
    background-color: greenyellow;
    border: 2px solid #70707026;
    transition: filter 300ms;
    &:hover{
    cursor: pointer;
    filter: brightness(1.1);
    transform: scale(1.1);
    box-shadow: inset 0px 2px 3px #00000029, 0px 2px 4px #0000004D;
    }
`);

const PriceTitle = styled.div`
    position: absolute;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 1.2em;
    z-index: 3;
    right: 0.2em;
    top: 0.2em;
`
const Circle = styled.div`
    position: absolute;
    bottom: 0.1em;
    left: 0.1em;
    border-radius: 50%;
    width: 25%;
    height: 25%;
    border: 2px solid #4AA9BD26;
    background-color: rgba(255, 255, 255, 0.4);
    z-index: 3;
`
const Check = styled(CheckMark)`
    margin: 10% 15%;
    color: #4AA9BD;
    width: 70%;
`
const JewelPart: React.FC<Props> = ({ image }) => {
    const [isMarked, setIsMarked] = useState(false);
    return (
        <JewelPartItem onClick={()=> setIsMarked(!isMarked)} image={image}>
            <PriceTitle>80$</PriceTitle>
            <Circle>
                {isMarked && <Check />}
            </Circle>
        </JewelPartItem>
    )
}

export default JewelPart