import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { AuthorsArr, messages, } from '../utils/constants'

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between ;
  padding: 1em ;
  border-radius: .5em;
  border: 1px solid #70707059;
  margin-left: 1em;
`
const MessageTextWrapper = styled.div`
    width: 70% ;
    display: flex;
    flex-direction: column ;
`
const TextAndAvatarWrapper = styled.div`
    display: flex;
    justify-content: space-between ;
`
const Text = styled.div`
    font-family: Segoe UI;
    color: #707070;
`
const ContactName = styled.div`
    color: #2C2738;
    font-size: 1.2em ;
    font-weight: 600 ;
    margin-bottom: 1em;
`
const ButtonsWrapper = styled.div`
    min-width: 20%;
    display: flex ;
    justify-content:  space-between ;
    gap: 1em;
    margin: 0 auto;
`
const MessageTitle = styled.div`
    font-family: IBMPlexSans ;
    color: #2C2738;
    font-size: 1em ;
    font-weight: 500 ;
    margin-bottom: .7em ;
`
const SquareContactAvatar = styled.img`
    width: 10rem;
    height: 10rem ;
    border-radius: .5em ;
    object-fit: cover;
`
const Button = styled.div`
    width: 5em;
    height: 2em ;
    border-radius: .4em ;
    border: 1 solid grey;
    box-shadow: 0 .2em .2em 0 rgba(0,0, 0, .3);
    background-color: #4AA9BD;
    color: white;
    text-align: center;
    padding: .3em;
    cursor: pointer;
    &:active{
         box-shadow: none;
         background-color: #0880AE ;
         transform: translateY(.3em);
    }
`
const Message = () => {
    const {messageID} = useParams();
    
    const messageIndex = messages.findIndex(m => m.id === +messageID!)
    console.log(messageIndex);
    const message = messages[messageIndex];
    const authorIndex = AuthorsArr.findIndex(a => a.id === message.authorID)
    const author = AuthorsArr[authorIndex];
    return (
        <MessageContainer>
            <TextAndAvatarWrapper>

                <MessageTextWrapper>
                    <ContactName>{author.firstName}</ContactName>
                    <MessageTitle>{message.title}</MessageTitle>
                    <Text>{message.text}</Text>
                </MessageTextWrapper>
                <SquareContactAvatar src={author.image} />
            </TextAndAvatarWrapper>
            <ButtonsWrapper>
                <Button>Delete</Button>
                <Button>Reply</Button>
            </ButtonsWrapper>
        </MessageContainer>
    )
}

export default Message