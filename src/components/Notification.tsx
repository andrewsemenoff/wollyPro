import React from 'react'
import styled from 'styled-components'
import SvgBell from '../iconComponents/Bell'

const Bell = styled(SvgBell)`
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
const Notification = () => {
  return (
    <div>
        <Bell/>
    </div>
  )
}

export default Notification