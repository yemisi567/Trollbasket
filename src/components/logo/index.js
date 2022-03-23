import React from 'react';

import { string } from 'prop-types';
import styled from 'styled-components';

export const Logo = styled.div`
    width: 72px;
    height: 72px
    border-radius: 50%
    overflow: hidden;
`;

export const Logos = styled.div`
    text-align: center;
`;

export const LogoImage = styled.div`
    position: relative;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 4px;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    object-fit: initial
`;

export const ProductImagee = ({
    Icon,
}) => {
    return (
        <Logo>
            <LogoImage>
            <Image
                    src={Icon}
                    alt={''}
                />
            </LogoImage>
        </Logo>
    );
};

ProductImagee.propTypes = {
    Icon: string.isRequired,
    iconWidth: string,
    iconHeight: string,
};
