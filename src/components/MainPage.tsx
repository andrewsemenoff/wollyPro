import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../images/Background.jpg';
import BackgroundImage2 from '../images/andre-benz2.png';
import Rings_1 from '../images/rings1.png';
import Rings_2 from '../images/rings2.png';
import ApplictionImg from '../images/Artboard.png';
import AppStoreImg from '../images/appstore.png';
import GoogleplayImg from '../images/googleplay.png';
interface StyleProps {
  [key: string]: string | number;
}

const MainPageWrapper = styled.div`
   position: relative;
   width: 100%;
   display: flex;
   flex-direction: column;
`
const Background = styled.div`
  background-position: center 40%;
  background-repeat: no-repeat;
  width: 100%;
  height: 1000px;
  background-image: url(${BackgroundImage});
`
const Background_2 = styled.div`
  position: relative;
  background-position: center -20px;
  background-repeat:no-repeat;
  background-size: 120% auto;
  width: 100%;
  height: 1600px;
  background-image: url(${BackgroundImage2});
`
const Rings1 = styled.img`
  position: absolute;
  right: 0px ;
  top: -140px;
`
const Rings2 = styled.img`
  position: absolute;
  left: 200px ;
  top: 0px;
`
const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 900px;
  z-index: -2;
  background: transparent linear-gradient(180deg, rgba(203, 160, 180) , rgb(163, 39, 95) );
  bottom: 0px;
  opacity: 1;
`
const Rectangle = styled.div`
left: 10%;
position: absolute;
bottom: 0px;
z-index: -1;
width: 80%;
height: 900px;
background: #670631 0% 0% no-repeat padding-box;
opacity: 0.25;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  position: absolute;
  left: calc(50% - 15% / 2 );
  bottom: 7%;
`
const Application = styled.img`
  width: 100%;
  margin: 10% 0;
  border-radius: 3%;
`
const Title = styled.div`
text-align: center;
  color: #FFFFFF;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5em;
`

const Stores = styled.img`
  width: 30%;
  &:hover{
    cursor: pointer;
    filter: brightness(1.75);
    transform: scale(1.2);
  }
`
const StoresContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const MainPage = () => {
  return (
    <MainPageWrapper>
      <Background />
      <Background_2>
        <Rings1 src={Rings_1} />
        <Rings2 src={Rings_2} />
      </Background_2>
      <Gradient />
      <Wrapper>
        <Title>Now, also on App!</Title>
        <Application src={ApplictionImg} />
        <StoresContainer>
          <Stores src={GoogleplayImg} />
          <Stores src={AppStoreImg} />
        </StoresContainer>
      </Wrapper>
      <Rectangle />
    </MainPageWrapper>
  )
}

export default MainPage;