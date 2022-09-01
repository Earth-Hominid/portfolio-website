import ProjectCard from './project-card/ProjectCard';

import ProjectOne from '@/public/images/learning.png';
import ProjectTwo from '@/public/images/blog.png';
import ProjectThree from '@/public/images/chair.png';
import ProjectFour from '@/public/images/learning.png';

import { MainSection, SectionTitle, CardContainer } from './Styles';

const ProjectSection = () => {
  return (
    <MainSection>
      <SectionTitle>Featured Projects</SectionTitle>
      <CardContainer>
        <ProjectCard
          title="Business Learning Platform"
          src={ProjectOne}
          technology="TypeScript | Node | PostgreSQL | NextJS |  StrapiJS Headless CMS"
          description="An easy to use web application that strengthens business organizations by providing infrastructure for learning and secure collaboration."
          styles="text-black bg-rose-50"
          textColor="text-black"
          buttonColor="hover:bg-rose-300 bg-white text-black transition duration-300 hover:text-white"
          websiteAddress="https://github.com/Earth-Hominid/Business-Communication-Platform-Full-Stack"
          githubAddress="https://rbsdocsfrontend.vercel.app/"
        />
        <ProjectCard
          title="Blog Creator API"
          src={ProjectTwo}
          technology="Node | React | Express | MongoDB | 
         Mongoose"
          description="Designed with Model-View-Controller architecture and the blazingly fast RESTful API framework. Online users can signup for an account. Once authenticated, they can create, save, edit and view blog entries."
          styles="text-black bg-indigo-50"
          textColor="text-black"
          buttonColor="hover:bg-indigo-500 bg-white hover:text-white"
          websiteAddress="https://blog-creator-mern-app.herokuapp.com/"
          githubAddress="https://github.com/Earth-Hominid/Blog-Creator-API"
        />
        <ProjectCard
          title="Chair Mart"
          src={ProjectThree}
          technology="React | React Router | Jest"
          description="An E-commerce Furniture Store mock-up with shopping cart"
          styles="text-black bg-stone-100"
          textColor="text-black"
          buttonColor="hover:bg-stone-400 bg-white hover:text-white"
          websiteAddress="https://earth-hominid.github.io/Chair-Mart/"
          githubAddress="https://github.com/Earth-Hominid/Chair-Mart"
        />
      </CardContainer>
    </MainSection>
  );
};

export default ProjectSection;
