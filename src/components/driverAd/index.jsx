import React from 'react';
import styled from 'styled-components';
import { BrandLogo } from '../brandLogo';
import { Marginer } from '../marginer';
import DriverAdImg from '../../images/Taxi_Driver_ad.png';
import { Button } from '../button';
import { useMediaQuery } from 'react-responsive';
import { deviceSize } from '../responsive';

const DriverAdContainer = styled.div`
    width: 100%;
    height: 500px;
    display : flex;
    background-color: rgba(38, 83, 66, 0.9);
    align-items: center;
    justify-content: center;
`;

const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        flex-direction: column;
    }
`;

const SloganContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 5em;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        align-items: center;
        margin-right: 0;
    }
`;

const Slogan = styled.h2`
    margin: 0;
    font-size: 20;
    color: #fff;
    font-weight: 700;
    line-height: 1.6;
`;

const StandoutImage = styled.div`
    width: 35em;
    height: 29em;

    img{
        width: 100%;
        height: 100%;
    }
`;

export function DriverAd(props) {

    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

    return (
        <DriverAdContainer>
            <ContentContainer>
                <SloganContainer>
                    <BrandLogo logoSize={isMobile ? 33 : 40} textSize={isMobile ? 28 : 35} />
                    <Marginer direction="vertical" margin="1em" />
                    <Slogan>Do You Want Be a Driver?</Slogan>
                    <Slogan>Hurry!! Join Us</Slogan>
                    <Marginer direction="vertical" margin="0.8em" />
                    <Button size={15}>Join as Driver</Button>
                </SloganContainer>
                {!isMobile && (
                    <StandoutImage>
                        <img src={DriverAdImg} alt="join-as-driver" />
                    </StandoutImage>
                )}
            </ContentContainer>
        </DriverAdContainer>
    );
}