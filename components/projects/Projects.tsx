import Grid from './grid/Grid';
import CardOne from './project-cards/CardOne';
import CardTwo from './project-cards/CardTwo';
import CardThree from './project-cards/CardThree';
import CardFour from './project-cards/CardFour';
import CardFive from './project-cards/CardFive';
import CardSix from './project-cards/CardSix';
import { SectionTitle, InsideContainer, CardContainer } from './Styles';

type Props = {};

const Projects = (props: Props) => {
  return (
    <>
      <CardContainer>
        <SectionTitle>Featured Projects</SectionTitle>
        <InsideContainer>
          <CardOne />
          <CardTwo />
          <CardThree />
          <CardFour />
          <CardFive />
          <CardSix />
        </InsideContainer>
      </CardContainer>
      <Grid />
    </>
  );
};

export default Projects;
