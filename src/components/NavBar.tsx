import React from 'react'
import styled from 'styled-components'
import SvgClose from '../iconComponents/Close';
import SvgSearchIcon from '../iconComponents/SearchIcon';
import Diamond from './Diamond';
import Notification from './Notification';
import Shopping from './Shopping';
import LogoImage from '../images/Logo.png';
import ProfileDropMenu from './PofileDropMenu';
import { Link } from 'react-router-dom';
import { categories } from '../utils/constants';

const NavBarContainer = styled.div`
    display: grid;
    grid-template-columns: minmax(300px, 1fr)  minmax(1024px, 1fr) 1fr;
    grid-template-rows:  minmax(90px, auto) minmax(87px, auto);
    background-color: #d5ccd3;
`
const SearchBtn = styled(SvgSearchIcon)`
    color: #91959C;
    position: absolute;
    width: 1.5em;
    height: 1.5em;
    z-index: 1;
    &:hover{
        transform: scale(1.2);
        color: #575757;
        cursor: pointer;
    }
`
const ClearBtn = styled(SvgClose)`
    color: #86848459;
    position: absolute;
    right: 3em;
    z-index: 1;
    &:hover{
        color: #575757;
        cursor: pointer;
    }
`
const Logo = styled.img`
    src: url(${props => props.src});
    position: absolute;
    right: 45px;
    bottom: -50px;
`
const LogoContainer = styled.div`
    grid-column: 1;
    grid-row: 1/3;
    position: relative;
`

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 1024px;
    height: 23px;
    /* background-color: grey; */
    margin: auto;
`
const SearchWrapper = styled.div`
    margin-right: 10px;
    flex-grow: 3;
    padding: 0.7em 3em;
    max-width: 400px;
    height: 3em;
    background-color: #F2E6F3;
    border-radius: 1.5em;
    position: relative;
    transition: all 1s ease-out;
    &:focus-within{
        max-width: 100%;
    }
`
const TextSearchInput = styled.input`
    width: 100%;
    padding: 0.4em;
    padding-left: 2.5em;
    font-size: 1em;
    border: none;
    outline: none;
    background-color: transparent;
    border-bottom: 1px solid #868484A6;
   
  &::placeholder {
    font-family: 'Arial';
    font-size: 1em;
    color: #91959C;
  }
  `
const MenuItem = styled(Link)`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.12em;
    text-decoration: none;
    color: #704575;
    &:hover{
        cursor: pointer;
        color: #190e1a;
    }
    &:focus{
        color: #EA4680;
    }
`
const Tools = styled.div`
    margin: auto;
    margin-bottom: 0.5em;
    min-width: 120px;
    max-width: 130px;
    display: flex;
    justify-content: space-between;
`
const SearchAndProfileContainer = styled.div`
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const NavBar = () => {
    return (
        <NavBarContainer>
            <LogoContainer>
                <Logo src={LogoImage} />
            </LogoContainer>
            <SearchAndProfileContainer>
                <SearchWrapper >
                    <SearchBtn />
                    <TextSearchInput placeholder='What would you like to find?' type='text' />
                    <ClearBtn />
                </SearchWrapper>
                <ProfileDropMenu />
            </SearchAndProfileContainer>
            <Tools>
                <Diamond />
                <Notification />
                <Shopping />
            </Tools>
            <Menu>
                <MenuItem to='/Main'>Main</MenuItem>
                {categories.map(i => 
                <MenuItem to= {`Gallery/${i.url}`}>{i.name}</MenuItem>
                )}
            </Menu>
        </NavBarContainer>
    )
}

export default NavBar