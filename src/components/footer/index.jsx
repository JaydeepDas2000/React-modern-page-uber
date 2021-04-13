import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { BrandLogo } from '../brandLogo';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 300px;
    flex-direction: column;
    justify-content: space-between;
    padding: 2em 3em;
    padding-bottom: 0;
    border-top: 1px solid rgba(38, 83, 66, 0.719);
`;

const TopContainer = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 1em;
`;

const ContentContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;

    &:not(:last-of-type){
        margin-right: 4%;
    }
`;

const BottomContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    height: 70px;
    border-top: 1px solid rgba(38, 83, 66, 0.719);
    padding: 0 10px;
`;

const RightBottomContainer = styled.div`
    display:flex;
`;

const LeftBottomContainer = styled.div`
    display: flex;
`;

const Title = styled.h2`
    margin: 0;
    margin-bottom: 8px;
    color: #000;
    font-weight: 600;
    font-size: 20px;
`;

const SocialIcon = styled.div`
    color: #265342b7;
    font-size: 20px;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:not(:last-of-type){
        margin-right: 10px
    }

    &:hover{
        color: rgb(40, 82, 66);
    }
`;

const FLink = styled.a`
    text-decoration: none;
    color: #6f6f6f;
    font-weight: 500;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-content: flex-start;

    &:not(:last-of-type){
        margin-bottom: 5px;
    }
`;

const PrivacyText = styled.h6`
    color: #afafaf;
    font-size: 11px;
    margin: auto;
    margin-left: 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
`;

export function Footer(props) {
    return (
        <FooterContainer>
            <TopContainer>
                <ContentContainer>
                    <Title>Categories</Title>
                    <FLink>Donation</FLink>
                    <FLink>Uber Eat</FLink>
                    <FLink>Uber Bike</FLink>
                    <FLink>Car Dealer</FLink>
                    <FLink>Other</FLink>
                    <FLink>Contact Us</FLink>
                </ContentContainer>
                <ContentContainer>
                    <Title>Access</Title>
                    <FLink>Login</FLink>
                    <FLink>Join Us</FLink>
                    <FLink>Login as Driver</FLink>
                    <FLink>Join Us as Driver</FLink>
                </ContentContainer>
            </TopContainer>
            <BottomContainer>
                <LeftBottomContainer>
                    <BrandLogo hideLogo color="#265342b7" textSize={25} />
                    <PrivacyText> &#169; All Right Reserved. 2021</PrivacyText>
                </LeftBottomContainer>
                <RightBottomContainer>
                    <SocialIcon>
                        <FontAwesomeIcon icon={faFacebook} />
                    </SocialIcon>
                    <SocialIcon>
                        <FontAwesomeIcon icon={faTwitter} />
                    </SocialIcon>
                </RightBottomContainer>
            </BottomContainer>
        </FooterContainer>
    );
}