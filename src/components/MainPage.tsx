import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../images/Background.jpg';
interface StyleProps {
  [key: string]: string | number;
}

const MainPageWrapper = styled.div`
  width: 100%;
   display: flex;
`
const Background = styled.img`
width: 100%;
height: 100%;
  background-image: url(${(props: StyleProps) => props.src});
`

const MainPage = () => {
  return (
    <MainPageWrapper>
    <Background src = {BackgroundImage}/>
    </MainPageWrapper>
  )
}

export default MainPage;