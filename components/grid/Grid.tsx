import {
  MainSection,
  MainContainer,
  SectionTitle,
  Subheading,
  TextContainer,
} from './Styles';

import CardOne from '../project-cards/CardOne';
import CardTwo from '../project-cards/CardTwo';
import CardThree from '../project-cards/CardThree';
import CardFour from '../project-cards/CardFour';
import CardFive from '../project-cards/CardFive';
import CardSix from '../project-cards/CardSix';

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
