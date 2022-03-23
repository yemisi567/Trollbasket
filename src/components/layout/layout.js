import React, { Fragment } from 'react';

import styled from 'styled-components';


const LayoutWrapper = styled.div`
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: ${({ overflow }) => overflow || 'hidden'};
    background-color: #edf2f7;
    padding: 0;
`;

const Background = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    background: #edf2f7;
    margin: 0 auto;
    min-height: ${({ fullHeight }) => (fullHeight ? '100vh' : 'calc(100vh - 6px)')};
    @media (max-width: 576px) {
        top: 0;
        min-height: 100vh;
    }
`;

const DesktopStyledWidth = styled.div`
    position: relative;
    width: inherit;
    background: white;
    margin: 0 auto 0;
    overflow: hidden;
    @media (min-width: 576px) {
        max-width: 375px;
        -webkit-box-shadow: 0px 52px 120px rgba(0, 0, 0, 0.08);
        box-shadow: 0px 52px 120px rgba(0, 0, 0, 0.08);
    }
`;


const Layout = ({
    children,
    overflow,
}) => {
    return (
        <Fragment>
            <LayoutWrapper overflow={overflow}>
                <Background>
                    <DesktopStyledWidth>
                        {children}
                    </DesktopStyledWidth>
                </Background>
            </LayoutWrapper>
        </Fragment>
    );
};

export default Layout;