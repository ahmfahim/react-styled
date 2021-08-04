import React from 'react';
import styles from './Home.module.css';
import styled from 'styled-components';

const Title = styled.h1`
    color: white;
    font-size:1.5em;
    background: goldenrod;
`;

const Home = () => {
    return (
        <div>
            <h1 className={styles.title}>home</h1>
            <Title>Styled components</Title>
        </div>
    );
};

export default Home;