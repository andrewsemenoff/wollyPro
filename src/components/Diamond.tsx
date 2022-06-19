import React from 'react'
import styled from 'styled-components'
import SvgDiamond from '../iconComponents/Diamond'

const DiamondIcon = styled(SvgDiamond)`
    width: 1.7em;
    height: 1.7em;
    color: black;
    transition: all 0.3s;
    &:hover{
        color: #6AC9C9;
        transform: scale(1.1);
        cursor: pointer;
    }
`
const Diamond = () => {
  return (
    <div>
        <DiamondIcon/>
    </div>
  )
}

export default Diamond