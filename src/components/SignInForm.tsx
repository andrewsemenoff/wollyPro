import React, { useState } from 'react'
import styled from 'styled-components'
import SvgEyeOff from '../iconComponents/EyeOff'

interface EyeButtonProps {
  color?: string,
}

const Container = styled.div`
    width: 250px;
    height: 400px ;
    background-color:  #FFFFFF;
    border: 1px solid #D1D3D6;
    border-radius: 2px;
    box-shadow: 0px 0px 16px #0000000D;
    padding: 20px;
    position: absolute;
    z-index:5;
    top: 40px;
`
const Title = styled.div`
    text-align: center;
    color: #1B252C;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 32px;
`
const Input = styled.input`
  padding: 10px;
  width: 100%;
  height: 32px;
  color:#4AA9BD;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background-color: #FFFFFF;
  border: 1px solid #B5B7BC;
  border-radius: 8px;
`
const EmailInput = styled(Input)`
`
const PasswordInput = styled(Input)`

`
const Subtitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #181C24;
  margin-top: 10px;
  margin-bottom: 10px;
`
const EyeOffButton = styled(SvgEyeOff)<EyeButtonProps>(({ color }) => `
  display: block;
  margin-top: 5px;
  margin-left: 90%;
  color: ${color ?? 'grey'};
  &:hover{
    color: #65b9e3;
    cursor: cursor;
  }
`);
const ButtonsWrapper = styled.div`
  height: 30%;
  padding: 1em 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const SignInButton = styled.button`
    display: block;
    height: 2em;
    width: 50%;
    background-color: #d538f0;
    color: white;
    outline: none;
    border: none;
    border-radius: 1em;
    &:hover{
      color: #4a4a4a;
      background-color: #ffffff;
      border: 1px solid grey;
      cursor: pointer;
    }
`
const CreateAccountButton = styled.button`
    display: block;
    height: 2em;
    width: fit-content;
    background-color: #FFFFFF;
    color: #6AC9C9;
    outline: none;
    border: 2px solid #6AC9C9;
    border-radius: 1em;
    padding: 0 1em;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    &:hover{
      color: #4a4a4a;
      background-color: #ffffff;
      border: 1px solid grey;
      cursor: pointer;
    }
`
const Line = styled.hr`
  width: 100%;
  height: 1px;
  border-width: 0;
  background-color: #F2E6F3;
`
const SignInForm = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true)
  const [EyeColor, setEyeColor] = useState({ color: 'black' })
  const toggleEyeButton = () => {
    setIsPasswordHidden(!isPasswordHidden);
  }
  const toggleEyeColor = () => {
      isPasswordHidden ?
      setEyeColor({ color: 'grey' })
      :
      setEyeColor({ color: 'black' });
  }
  return (
    <Container>
      <Title>Sign in to your Account</Title>
      <Subtitle>Email</Subtitle>
      <EmailInput type='email' />
      <Subtitle>Password</Subtitle>
      <PasswordInput type={isPasswordHidden?'password': 'text'} />
      <EyeOffButton 
      onClick={() =>{ toggleEyeButton(); toggleEyeColor()}} 
      color={EyeColor.color} />
      <a href='#'><Subtitle>Forgot Password?</Subtitle></a>
      <ButtonsWrapper>
        <SignInButton>Sign in</SignInButton>
        <Line />
        <CreateAccountButton>CREATE ACCOUNT</CreateAccountButton>
      </ButtonsWrapper>
    </Container>
  )
}

export default SignInForm