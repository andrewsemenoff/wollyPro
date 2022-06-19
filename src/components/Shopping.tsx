import React from 'react'
import styled from 'styled-components'
import SvgShoppingBag from '../iconComponents/ShoppingBag'

const DropdownMenu = styled.div`
 position: absolute;
 left: 0px;
 top: calc(100% + .25rem);
 background-color: white;
 padding: .75rem;
 border-radius: .25rem;
 box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .2);
 opacity: 0;
 transition: opacity 150ms ease-in-out;
`
const ShoppingBag = styled(SvgShoppingBag)`
    width: 1.7em;
    height: 1.7em;
    color: black;
    transition: all 0.3s;
    &:hover{
        color: #6AC9C9;
        transform: scale(1.1);
        cursor: pointer;
    }
    &:focus > ${DropdownMenu}{
      opacity: 1;
    }
`
const Dropdown = styled.div`
 position: relative;
`


const Shopping = () => {
  return (
    <div>
      <Dropdown>
        <ShoppingBag />
        <DropdownMenu>
          menu
        </DropdownMenu>
      </Dropdown>

    </div>
  )
}

export default Shopping