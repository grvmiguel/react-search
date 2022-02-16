import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setSearchKeyword, clearWorksList } from '../redux/actions';
import { fetchWorks } from '../redux/actions';

const Searchbox = styled.input`
    padding: 0.8em;
    background-color: #e4e4e4;
    border-style: none;
    border-radius: 5px;
    outline: none;
`;

export default function Searchinput() {

    const dispatch = useDispatch();

    const userInput = (event) => {
        const inputText = event.target.value;
        dispatch(setSearchKeyword(inputText));
        if(inputText === '') {
            dispatch(clearWorksList());
        } else {
            dispatch(fetchWorks(inputText));
        }
    };

    return <Searchbox onInput={ (event) => userInput(event) } type="text" placeholder="Quick search..." />

}