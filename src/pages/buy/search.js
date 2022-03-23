import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchSvg } from './assets/search.svg';

const SearchWrapper = styled.div`
    display: flex;
    height: 40px;
    width: 90%;
    margin: auto;
    margin-top: ${({ top }) => top || null};
    margin-bottom: ${({ bottom }) => bottom || null};
`;

const SearchIcon = styled(SearchSvg)`
    position: absolute;
    right: ${({ right }) => right || '3%'};
    margin-right: 28px;
    margin-top: 13px;

`;

const Input = styled.input`
    border: none;
    outline-color: transparent;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    background-color: #EDF2F7;
    padding: 15px;
    border-radius: 4px;
    width: 100%;
`;

export const Search = ({ placeholder, onClick, top, bottom, value, onChange, iconLeft, showIcon=true }) => {

    return (
        <SearchWrapper onClick={onClick} top={top} bottom={bottom}>
            {showIcon && <SearchIcon left={iconLeft} /> }
            <Input value={value} onChange={onChange} placeholder={placeholder} />
        </SearchWrapper>
    );
};