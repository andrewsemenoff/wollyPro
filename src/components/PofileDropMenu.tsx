import React, { useState } from 'react'
import styled from 'styled-components'
import SvgUser2 from '../iconComponents/User2'
import SvgUserProfile from '../iconComponents/UserProfile'
import ProfileMenu from './ProfileMenu'
import SignInForm from './SignInForm'

interface ProfileButtonProps {
  color?: string,
  fill?: string,
}
const ButtonTitle = styled.div`
  font-size: 18px;
  color: #1B252C;
  font-family: 'Montserrat', sans-serif;
`
const Wrapper = styled.div`
  position: relative;
`
const ButtonWithTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ProfileButton = styled(SvgUser2)<ProfileButtonProps>(({ color, fill }) => `
width: 1.7em;
height: 1.7em;
color: ${color ?? 'black'};
fill: ${fill ?? 'none'};
transition: all 0.3s;
margin-right: 20px;
&:hover{
    fill: #b287b6;
    color: transparent;
    cursor: pointer;
};
`);
const PinkRectangle = styled.hr`
  width: 100px;
  height: 7px;
  border-width: 0;
  background-color: #b287b6;
  position: absolute;
  z-index: 10;
  left: 0px;
  top: 30px;
`

const ProfileDropMenu = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [colorProps, setColorProps] = useState({ color: 'black', fill: 'none' })
  const [isSignedIn, setIsSignedIn] = useState(true);
  const toggleDropMenu = () => {
    setIsToggled(!isToggled);
  }
  const toggleUserIconColor = () => {
    isToggled
      ?
      setColorProps({ color: 'none', fill: 'none' })
      :
      setColorProps({ color: 'transparent', fill: '#b287b6' })
  }
  return (
    <Wrapper>
      <ButtonWithTitleContainer>
        <ProfileButton onClick={() => { toggleDropMenu(); toggleUserIconColor(); }}
          color={colorProps.color}
          fill={colorProps.fill} />
        <ButtonTitle>{isSignedIn ? 'hello, Andrey' : 'Sign in'}</ButtonTitle>
      </ButtonWithTitleContainer>
      {isToggled && <PinkRectangle />}
      {!isSignedIn && isToggled && <SignInForm />}
      {isSignedIn && isToggled && <ProfileMenu />}
    </Wrapper>
  )
}

export default ProfileDropMenu