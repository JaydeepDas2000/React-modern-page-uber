import React from 'react';
import styled from 'styled-components';
import { BrandLogo } from '../brandLogo';
import { Button } from '../button';
import { Marginer } from '../marginer';

import { Link } from 'react-router-dom';

const NavbarContainer = styled.div`
    width: 100%;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5em;

    background-color: ${({ useTransparent }) => useTransparent ? "transparent" : "rgba(38, 83, 66, 0.9)"};
`;

const AccessibilityContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const AnchorLink = styled(Link)`
    font-size: 13px;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    transition: all 200ms ease-in-out;

    &:hover{
        filter: contrast(0.6)
    }
`;

const Seperator = styled.div`
    min-height: 35%;
    width: 1px;
    background-color: #fff;
`;

export function Navbar(props) {
    const { useTransparent } = props;

    return (
        <NavbarContainer useTransparent={useTransparent}>
            <BrandLogo />
            <AccessibilityContainer>
                <AnchorLink>Driver Portal</AnchorLink>
                <Marginer direction="horizontal" margin={10} />
                <Seperator />
                <Marginer direction="horizontal" margin={10} />
                <Link to="/customer/access/signup">
                    <Button size={12}>Register</Button>
                </Link>
                <Marginer direction="horizontal" margin={10} />
                <AnchorLink to="/customer/access/signin">Login</AnchorLink>
            </AccessibilityContainer>
        </NavbarContainer>
    );
}