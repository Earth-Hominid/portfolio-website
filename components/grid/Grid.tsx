import {
  MainSection,
  MainContainer,
  SectionTitle,
  Subheading,
  TextContainer,
} from './Styles';

import CardOne from './custom-cards/CustomOne/CustomOne';
import CardTwo from './custom-cards/CustomTwo/CustomTwo';
import CardThree from './custom-cards/CustomThree/CustomThree';
import CardFour from './grid-cards/CardFour';
import CardFive from './custom-cards/CustomFive/CustomFive';
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
