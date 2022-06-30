import React from 'react'
import styled from 'styled-components'
import { messages } from '../utils/constants'
import CompactMessage from './CompactMessage'

const MessagesWrapper = styled.div`
margin-left: 1em;
  display: flex ;
  /* flex-direction: column ; */
  gap: .8em;
  flex-wrap: wrap;
`
const MessagesList = () => {
  return (
<MessagesWrapper>
    {messages.map((m, index) => <CompactMessage key={index}  message= {m}/>)}
</MessagesWrapper>
  )
}

export default MessagesList