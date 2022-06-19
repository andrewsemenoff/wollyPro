import React from 'react'
import styled from 'styled-components';
import SvgBasketReview from '../iconComponents/BasketReview';
import SvgGiftcard from '../iconComponents/GiftCard';
import SvgMessage from '../iconComponents/Message';
import SvgSettings from '../iconComponents/Settings';
import SvgUser2 from '../iconComponents/User2';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: fit-content;
    height: 300px ;
    background-color:  #FFFFFF;
    border: 1px solid #D1D3D6;
    border-radius: 2px;
    box-shadow: 0px 0px 16px #0000000D;
    padding: 20px;
    position: absolute;
    z-index:5;
    top: 40px;
`
const StartToSellButton = styled.button`
    display: block;
    height: 2em;
    width: 10em;
    background-color: #6AC9C9;
    box-shadow: 0px 3px 6px #00000029;
    color: white;
    outline: none;
    border: 2px solid #6AC9C9;
    border-radius: 1em;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    &:hover{
      color: #4a4a4a;
      background-color: #ffffff;
      border: 1px solid grey;
      cursor: pointer;
    }
`
const UserIcon = styled(SvgUser2)`
  width: 1.5em;
  height: 1.5em;
  color: transparent;
  fill: #6AC9C9;
`
const Line = styled.hr`
  width: 100%;
  height: 1px;
  border-width: 0;
  background-color: #F2E6F3;
`
const GiftButton = styled(SvgGiftcard)`
      width: 1.5em;
      height: 1.5em;
      fill: #000000;
&:hover{
      fill: #6AC9C9;
      cursor: pointer;
    }
`
const Message = styled(SvgMessage)`
      width: 1.5em;
      height: 1.5em;
      color: #000000;
&:hover{
      color: #6AC9C9;
      cursor: pointer;
    }
`
const Basket = styled(SvgBasketReview)`
      width: 1.5em;
      height: 1.5em;
      fill: #000000;
&:hover{
      fill: #6AC9C9;
      cursor: pointer;
    }
`
const CogWheel = styled(SvgSettings)`
      width: 1.5em;
      height: 1.5em;
      fill: #000000;
&:hover{
      fill: #6AC9C9;
      cursor: pointer;
    }
`
const MenuItem = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  color: #707070;
  &:hover{
    cursor: pointer;
    color: #6AC9C9;
  }
`

const ProfileMenu = () => {
  return (
    <Container>
      <MenuItem><UserIcon />My profile</MenuItem>
      <Line />
      <MenuItem><GiftButton /> Gift</MenuItem>
      <MenuItem><Message /> Messages</MenuItem>
      <MenuItem><Basket /> purchases</MenuItem>
      <MenuItem><CogWheel /> Settings</MenuItem>
      <Line />
      <StartToSellButton>Start to Sell</StartToSellButton>
    </Container>
  )
}

export default ProfileMenu;





