import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Searchelement from '../search-element/Searchelement';

const Container = styled.div`
    position: fixed;
    right: 0;
    padding: 1em;
    margin: 0.8em;
    background-color: #e4e4e4;

    max-height: 40%;
    min-width: 25%;
    max-width: 90%;

    @media (min-width: 800px) { max-width: 35%; }

    overflow-y: scroll;
    overflow-x: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
`;

const Spinner = styled.div`
    width: 3em;
    height: 3em;
    border-width: 0.2em;
    border-top-style: solid;
    border-radius: 1.5em;
    border-color: gray;
    animation: rotation 1.5s linear infinite;
    margin: auto;
    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default function SearchPanel() {

    const worksList = useSelector((state) => state.works.worksList);
    const isLoading = useSelector((state) => state.works.isLoading);
    let ShowSpinner;
    let NoData;

    if(isLoading) {
        ShowSpinner = <Spinner></Spinner>
    }

    if(!isLoading && worksList.length === 0) {
        NoData = <p>No titles found for the seach term.</p>
    }

    const Elements = worksList.map((work, index) => {
        return (
            <Searchelement key={ index.toString() } info={ { title: work.title, desc: work.desc, img: work.img } }></Searchelement>
        );
    });

    return (
        <Container>
            { ShowSpinner }
            { NoData }
            { Elements }
        </Container>
    );
}