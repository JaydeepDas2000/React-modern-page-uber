import React from "react";
import styled from 'styled-components';

const ButtonWrapper = styled.button`
    border: none;
    outline: none;
    color: #fff;
    padding: 6px 1em;
    font-size: ${({ size }) => size ? size + "px" : "18px"};
    font-weight: 600;
    border-radius: 3px;
    background-color: rgb(77, 156, 126);
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover{
        background-color: rgb(40, 82, 66);
    }

    &:focus{
        outline: none;
    }
`;

export function Button(props) {
    const { size } = props;

    return <ButtonWrapper size={size} className={props.className}>{props.children}</ButtonWrapper>
}