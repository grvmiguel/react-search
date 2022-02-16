import React from 'react';
import styled from 'styled-components';
import Searchinput from '../search-input/Searchinput';

const TopBarElement = styled.header`
    position: sticky;
    top: 0;
    background-color: #f2f2f2;
    padding: 0.7em;
    display: flex;
    flex-direction: row-reverse;
`;

export default class Topbar extends React.Component {
    render() {
        return (
            <TopBarElement>
                <Searchinput></Searchinput>
            </TopBarElement>
        )
    }
}