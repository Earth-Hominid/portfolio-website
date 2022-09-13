import CardOne from '@/components/project-cards/CardOne';
import CardTwo from '@/components/project-cards/CardTwo';
import CardThree from '@/components/project-cards/CardThree';
import CardFour from '@/components/project-cards/CardFour';
import CardFive from '@/components/project-cards/CardFive';
import CardSix from '@/components/project-cards/CardSix';

import { CardContainer, MainSection, SectionTitle } from './Styles';

const ProjectSection = () => {
  return (
    <MainSection id="project_section">
      <SectionTitle>Featured Projects</SectionTitle>
      <CardContainer>
        <CardOne />
      </CardContainer>
      <CardContainer>
        <CardTwo />
      </CardContainer>
      <CardContainer>
        <CardThree />
      </CardContainer>
      <CardContainer>
        <CardFour />
      </CardContainer>
      <CardContainer>
        <CardFive />
      </CardContainer>
      <CardContainer>
        <CardSix />
      </CardContainer>
    </MainSection>
  );
};

export default ProjectSection;
