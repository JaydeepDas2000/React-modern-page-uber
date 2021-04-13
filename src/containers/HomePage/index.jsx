import React from 'react';
import styled from 'styled-components';
import { DriverAd } from '../../components/driverAd';
import { Footer } from '../../components/footer';
import { Marginer } from '../../components/marginer';
import { Navbar } from '../../components/navbar';
import { InnerPageContainer, PageContainer } from '../../components/pageContainer';
import { deviceSize } from '../../components/responsive';
import { Services } from './services';
import { TopSection } from './topSection';


const ContentContainer = styled.div`
    width: 100%;
    max-width: ${deviceSize.laptop}px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.2em;
    ;
`;

export function HomePage(props) {
    return (
        <PageContainer>
            <TopSection>
                <Navbar useTransparent />
            </TopSection>
            <InnerPageContainer>
                <Marginer direction="vertical" margin="2em" />
                <ContentContainer>
                    <Services />
                </ContentContainer>
                <Marginer direction="vertical" margin="5em" />
                <DriverAd />
            </InnerPageContainer>
            <Marginer direction="vertical" margin="5em" />
            <Footer />
        </PageContainer>
    );
}