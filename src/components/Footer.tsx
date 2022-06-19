import React from 'react'
import styled from 'styled-components'
import SvgFacebook from '../iconComponents/Facebook'
import SvgInstagram from '../iconComponents/Instagram'
import SvgTwitter from '../iconComponents/Twitter'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const LinksAndSubscribing = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 60px 270px;
    height: 211px;
    width: 100%;
    background-color: #f5efe0;
    border-top: 13px solid #E7E7E7;
`
const Items = styled.div`
    width: 120px ;
    font-family: 'muli', sans-serif;
    font-size: 16px;
    color: #545D63;
    & > div {
        margin-bottom: 8px;
        &:hover{
        cursor: pointer;
        }
    }
`
const ItemsWide = styled(Items)`
    width: 300px;
`
const ItemTitle = styled.div`
    margin-bottom: 16px;
    color: #172026;
    font-family: 'muli', sans-serif;
    font-weight: 600;
`
const SocialNetworks = styled.div`
    width: 100px;
    display: flex;
    justify-content: space-between;
`
const InstagramIcon = styled(SvgInstagram)`
    width: 20px;
    height: 20px;
    fill: #545D63;
    &:hover{
        cursor: pointer;
        fill: black;
    }
`
const FacebookIcon = styled(SvgFacebook)`
    width: 20px;
    height: 20px;
    color: #545D63;
    &:hover{
        cursor: pointer;
        color: black;
    }
`
const TwitterIcon = styled(SvgTwitter)`
    width: 20px;
    height: 20px;
    color: #545D63;
    &:hover{
        cursor: pointer;
        color: black;
    }
`


const ShortInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding:0 270px 10px 270px;
    height: 57px;
    width: 100%;
    margin-bottom: 17px;
    background-color: #E7E7E7;
`
const CompanyName = styled.div`
    font-family: 'IBM Plex Sans';
    font-size: 28px;
    font-weight: 400;
    color: #756F86;
`
const CompanyAddress = styled.div`
    color: #545D63;
    font-family: 'muli', sans-serif;
    font-size: 14px;
`
const ContainerOthers = styled.div`
    color: #172026;
    font-size: 14px;
    display: flex;
`
const TermsOfUse = styled.div`
    margin-right: 10px;
`
const PrivacyPolicy = styled.div`
    
`

const Footer = () => {
    return (
        <Wrapper>

            <LinksAndSubscribing>
                <Items>
                    <ItemTitle>Account</ItemTitle>
                    <div>Sign In</div>
                    <div>Register</div>
                    <div>Order Status</div>
                </Items>
                <Items>
                    <ItemTitle>About Us</ItemTitle>
                    <div>Our Story</div>
                    <div>Careers</div>
                </Items>
                <Items>
                    <ItemTitle>Help</ItemTitle>
                    <div>Contact Us</div>
                    <div>Order Status</div>
                    <div>Returns</div>
                </Items>
                <ItemsWide>
                    <ItemTitle>Follow Us!</ItemTitle>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </div>
                    <SocialNetworks>
                        <InstagramIcon/>
                        <FacebookIcon/>
                        <TwitterIcon/>
                    </SocialNetworks>
                </ItemsWide>
            </LinksAndSubscribing>
            <ShortInfo>
                <CompanyName>Wolly Pro</CompanyName>
                <CompanyAddress>© Company Name Address Ave, City Name, State ZIP</CompanyAddress>
                <ContainerOthers>
                    <TermsOfUse>Terms of Use</TermsOfUse>
                    <PrivacyPolicy>Privacy Policy</PrivacyPolicy>
                </ContainerOthers>
            </ShortInfo>
        </Wrapper>
    )
}

export default Footer