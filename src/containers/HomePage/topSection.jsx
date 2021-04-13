import React from 'react';
import styled from 'styled-components';

import TopSectionBackgroundImg from "../../images/TopSection_bg.jpg";
import TaxiDriver from "../../images/Taxi_Driver_banner.png";
import { BrandLogo } from '../../components/brandLogo';
import { Marginer } from '../../components/marginer';
import { Button } from '../../components/button';
import { useMediaQuery } from 'react-responsive';
import { deviceSize } from '../../components/responsive';

import { Link } from 'react-router-dom';

const TopSectionContainer = styled.div`
    width: 100%;
    height: 635px;
    background: url(${TopSectionBackgroundImg}) no-repeat;
    background-position: 0px -100px;
    background-size: cover;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        height: 700px;
        background-position: 0px 0px;
    }
`;

const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(38, 83, 66, 0.719);
    display: flex;
    flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        justify-content: center;
    }
`;

const standoutImage = styled.div`
    width: 37em;
    height: 32em;

    img{
        width: 100%;
        height: 100%;
    }
`;

const Title = styled.h2`
    margin: 0;
    font-size: 24px;
    color: #fff;
    line-height: 1.7;
`;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const SloganText = styled.h3`
    margin: 0;
    line-height: 1.4;
    color: #fff;
    font-weight: 500;
    font-size: 35px;
`;

export function TopSection(props) {
    const { children } = props;

    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

    return (
        <TopSectionContainer>
            <BackgroundFilter>
                {children}
                <TopSectionInnerContainer>
                    <LogoContainer>
                        <BrandLogo logoSize={isMobile ? 50 : 65} textSize={isMobile ? 45 : 50} />
                        <Marginer direction="vertical" margin={8} />
                        <SloganText>
                            Easy to Ride...
                        </SloganText>
                        <Marginer direction="vertical" margin={15} />
                        <Link to="/customer/access/signin">
                            <Button>Join now</Button>
                        </Link>
                    </LogoContainer>
                    {!isMobile && (
                        <standoutImage>
                            <img src={TaxiDriver} alt="Taxi_Driver" />
                        </standoutImage>
                    )}
                </TopSectionInnerContainer>
            </BackgroundFilter>
        </TopSectionContainer>
    );
}