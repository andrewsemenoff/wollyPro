import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import SvgStar from '../iconComponents/Star'
import { AuthorsArr } from '../utils/constants'
const Wrapper = styled.div`
    width: 100%;
    display: flex ;
    align-items: center;
    justify-content: space-between ;
    gap: 1em;
`
const MessageFrame = styled.div`
    flex: 0 5 auto;
    width: 100%;
    height: fit-content;
    border: 1px solid #70707059;
    font-family: 'Montserrat', sans-serif;
    font-size: 1em;
    color: #707070;
    background-color: white;
    transition: all .1s ease-in-out;
    padding: .3em 1.5em .5em 1em;
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
    width: 4em ;
    height: 4em;
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
const ContactNameWrapper = styled.div`
    font-weight: 600;
    color: #545D63;
    margin-bottom: .2em;
`
const TextWrapper = styled.div`
position: relative ;
margin-left: 1em;
&:before{
    content: '❝';
    position: absolute ;
    line-height: .8em;
    font-size: 1.5em ;
    left: -.6em ;
}
&:after{
    content: '˙˙˙ ❞';
    position: absolute ;
    line-height: .8em;
    font-size: 1.5em ;
    
    bottom: -.6em;
}
`
interface CompactMessageInterface {
    message: {
        id: number;
        authorID: number;
        title: string;
        text: string;
    }
}

const CompactMessage: React.FC<CompactMessageInterface> = ({ message }) => {
    const navigate = useNavigate();
    const authorIndex = AuthorsArr.findIndex(a => a.id === +message.authorID);
    const text = `${message.text.slice(0, 200)} `
    return (
        <Wrapper onClick={() => navigate(`/Messages/${message.id}`)}>
            <ContactAvatar src={AuthorsArr[authorIndex].image} />
            <MessageFrame>
                <ContactNameWrapper>{`from ${AuthorsArr[authorIndex].firstName}:`}</ContactNameWrapper>
                <TextWrapper>
                    {text}
                </TextWrapper>
            </MessageFrame>
            <Star fill='#B287B6' />
        </Wrapper>
    )
}

export default CompactMessage