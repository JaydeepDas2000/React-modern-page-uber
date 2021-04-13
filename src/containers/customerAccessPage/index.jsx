import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { AccountBox } from "../../components/accountBox";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { PageContainer, InnerPageContainer } from "../../components/pageContainer";

const StyledInnerContainer = styled(InnerPageContainer)`
    margin-top: 2em;
    margin-bottom: 2em;
`;

export function CustomerAccessPage(props) {
    const { action } = useParams()

    return (
        <PageContainer>
            <Navbar />
            <StyledInnerContainer>
                <AccountBox initialActive={action} />
            </StyledInnerContainer>
            <Footer />
        </PageContainer>
    );
}