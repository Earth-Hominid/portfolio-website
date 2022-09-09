import {
  MainSection,
  MainContainer,
  SectionTitle,
  Subheading,
  TextContainer,
} from './Styles';

import CardOne from './grid-cards/CardOne';
import CardTwo from './grid-cards/CardTwo';
import CardThree from './grid-cards/CardThree';
import CardFour from './grid-cards/CardFour';
import CardFive from './grid-cards/CardFive';
import CardSix from './grid-cards/CardSix';

const Grid = () => {
  return (
    <MainSection>
      <MainContainer>
        <TextContainer>
          <SectionTitle>Featured Projects</SectionTitle>
          <Subheading>
            I am a full stack developer, specializing in the JavaScript
            Ecosystem. Learn more about my latest web applications.
          </Subheading>
        </TextContainer>
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
        <CardFive />
        <CardSix />
      </MainContainer>
    </MainSection>
  );
};

export default Grid;
