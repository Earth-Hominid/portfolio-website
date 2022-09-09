import {
  BlueCard,
  MainSection,
  MainContainer,
  RoseCard,
  SectionTitle,
  Subheading,
  TextContainer,
} from './Styles';

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

        <BlueCard></BlueCard>
        <RoseCard></RoseCard>
        <BlueCard></BlueCard>
        <RoseCard></RoseCard>
        <BlueCard></BlueCard>
        <RoseCard></RoseCard>
      </MainContainer>
    </MainSection>
  );
};

export default Grid;
