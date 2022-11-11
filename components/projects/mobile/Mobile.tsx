import React, { useState } from 'react';
import { motion } from 'framer-motion';

import CardOne from './project-cards/CardOne';
import CardTwo from './project-cards/CardTwo';
import CardThree from './project-cards/CardThree';
import CardFour from './project-cards/CardFour';
import CardFive from './project-cards/CardFive';
import CardSix from './project-cards/CardSix';
const slides = [CardOne, CardTwo, CardThree, CardFour, CardFive, CardSix];

import { CardContainer, Title, Container } from './Styles';

const Mobile = () => {
  return (
    <CardContainer>
      <Title>Featured Projects</Title>
      <Container>
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
        <CardFive />
        <CardSix />
      </Container>
    </CardContainer>
  );
};

export default Mobile;
