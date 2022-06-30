import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import CompactMessage from './CompactMessage'
import Message from './Message'



const MessagesMenuItem = styled(Link)`
    font-family: 'Montserrat', sans-serif;
    font-size: 1em;
    text-decoration: none;
    color: #707070;
    transition: all .1s ease-in-out;;
    &:hover{
        cursor: pointer;
        color: #190e1a;
        transform: scale(1.1);
    }
    &:focus{
        color: #6AC9C9;
    }
`
const SideNavBar = styled.div`
    display: flex ;
    flex-direction: column;
    gap: 2em;
    border-radius: .5em;
    background-color: lightgray;
    width: fit-content;
    padding: 1em;
`
const Wrapper = styled.div`
    margin: 1em auto;
    width: 80% ;
    display: flex ;
    margin-bottom: 2em;
`

const MessagesPage = () => {
    return (
        <div>
            <Wrapper>
                <SideNavBar>
                    <MessagesMenuItem to={`/Messages/Inbox`}>Inbox</MessagesMenuItem>
                    <MessagesMenuItem to={`/Messages/Stared`}>Stared</MessagesMenuItem>
                    <MessagesMenuItem to={`/Messages/Unread`}>Unread</MessagesMenuItem>
                    <MessagesMenuItem to={`/Messages/Sent`}>Sent</MessagesMenuItem>
                    <MessagesMenuItem to={`/Messages/Trash`}>Trash</MessagesMenuItem>
                </SideNavBar>
                <Outlet />
            </Wrapper>

        </div>
    )
}

export default MessagesPage