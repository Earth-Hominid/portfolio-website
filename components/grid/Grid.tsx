import {
  BlueCard,
  MainSection,
  MainContainer,
  RoseCard,
  SectionTitle,
  Subheading,
} from './Styles';

const Grid = () => {
  return (
    <MainSection>
      <MainContainer>
        <SectionTitle>
          <span className="bg-yellow-200 md:col-span-2">Featured Projects</span>
        </SectionTitle>
        <Subheading>
          I am a full stack developer, specializing in the JavaScript Ecosystem.
          Learn more about my latest web applications.
        </Subheading>
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
