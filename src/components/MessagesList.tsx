import React from 'react'
import styled from 'styled-components'
import CompactMessage from './CompactMessage'

const MessagesWrapper = styled.div`
 
`
const MessagesList = () => {
  return (
<MessagesWrapper>
    <CompactMessage/>
    <CompactMessage/>
    <CompactMessage/>
    <CompactMessage/>
    <CompactMessage/>
    <CompactMessage/>
</MessagesWrapper>
  )
}

export default MessagesList