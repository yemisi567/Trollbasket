import React from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as BackArrow } from './assets/back-arrow.svg';


const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content:  'center';
    max-width: inherit;
    width: 100%;
    height: 64px ;
    max-width: inherit;
    position: fixed
    left: auto;
    right: auto;
    background-color: white;
    z-index: 1000;
    top: 66px;
    @media (max-width: 576px) {
        top:0;
    }
`;

const Title = styled.h1`
    margin: auto;
    height: fit-content;
    font-size: 14px;
    font-weight: 400 ;
    letter-spacing: 0.04px;
    color: #212C3D;
    @media (min-width: 576px) {
        font-weight: normal;
    }
    @media (max-width: 320px) {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

const ButtonContainer = styled.div`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    position: absolute;
    left: 16px;
    background-color: #EDF2F7;
    top: 16px;
`;

export const Header = ({
    backButtonTop,
    title,
}) => {
    const navigate = useNavigate();
    return (
        <HeaderContainer>
                <ButtonContainer
                   onClick={() => navigate(-1)}
                    top={backButtonTop}
                >
                <BackArrow/>
                </ButtonContainer>
                <Title>
                    {title}
                </Title>
        </HeaderContainer>
    );
};


