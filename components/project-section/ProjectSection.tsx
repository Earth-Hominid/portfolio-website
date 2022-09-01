import ProjectCard from './project-card/ProjectCard';

import ProjectOne from '@/public/images/learning.png';
import ProjectTwo from '@/public/images/blog.png';
import ProjectThree from '@/public/images/chair.png';
import ProjectFour from '@/public/images/learning.png';

import { MainSection, SectionTitle } from './Styles';

const ProjectSection = () => {
  return (
    <MainSection>
      <SectionTitle>Featured Projects</SectionTitle>
      <ProjectCard
        title="Business Learning Platform"
        src={ProjectOne}
        technology="TypeScript | Node | PostgreSQL | NextJS |  StrapiJS Headless CMS"
        description="An easy to use web application that strengthens business organizations by providing an infrastructure for learning and secure collaboration."
        styles="text-black bg-rose-100"
        textColor="text-black"
      />
      <ProjectCard
        title="Blog Creator API"
        src={ProjectTwo}
        technology="Node | React | Express | MongoDB | 
         Mongoose"
        description=""
        styles="text-black bg-indigo-50"
        textColor="text-black"
      />
      <ProjectCard
        title="Chair Mart"
        src={ProjectThree}
        technology="React | React Router | Jest"
        description="An E-commerce Furniture Store mock-up with shopping cart"
        styles="text-black bg-gray-100"
        textColor=""
      />
    </MainSection>
  );
};

export default ProjectSection;
