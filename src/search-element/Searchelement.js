import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1em;
    cursor: pointer;
    &:hover {
        background-color: #d6d6d6;
    }
`;

const Image = styled.img`
    background-color: white;
    max-width: 6em;
    margin-right: 1em;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const Title = styled.h3`
    margin: 0;
`;
const Description = styled.p`
    margin: 0;
`;

export default class Searchelement extends React.Component {

    info = {
        img: '',
        title: '',
        desc: ''
    }

    constructor(props) {
        super(props);
        this.info = props.info;
    }

    userClick = () => {
        console.log(this.info)
        const encodedSearch = `${this.info.title} ${this.info.desc}`;
        window.open('https://amazon.co.uk/s?k=' + encodedSearch);
    }

    render() {
        return (
            <Container onClick={ this.userClick }>
                <Image src={this.info.img}></Image>
                <TextContainer>
                    <Title>{this.info.title}</Title>
                    <Description>{this.info.desc}</Description>
                </TextContainer>
            </Container>
        );
    }
}