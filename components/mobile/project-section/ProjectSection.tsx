import ProjectCard from './project-card/ProjectCard';
import ProjectOne from '@/public/images/learning.png';
import ProjectTwo from '@/public/images/vivacity.png';
import ProjectThree from '@/public/images/chair.png';
import ProjectFour from '@/public/images/seeds.png';
import ProjectFive from '@/public/images/memory.png';
import ProjectSix from '@/public/images/resume-builder.png';

import { MainSection, SectionTitle, CardContainer } from './Styles';

const ProjectSection = () => {
  return (
    <MainSection id="project_section">
      <SectionTitle>Featured Projects</SectionTitle>
      <CardContainer>
        <ProjectCard
          id="1"
          title="Business Learning Platform"
          src={ProjectOne}
          technology="TypeScript | Node | PostgreSQL | NextJS |  StrapiJS Headless CMS"
          description="An easy to use web application that strengthens business organizations by providing infrastructure for learning and secure collaboration."
          styles="text-black bg-rose-50"
          textColor="text-black"
          buttonColor="hover:bg-rose-300 bg-white text-black transition duration-300 hover:text-white"
          fillColor="group-hover:fill-white"
          githubAddress="https://github.com/Earth-Hominid/Business-Communication-Platform-Full-Stack"
          websiteAddress="https://rbsdocsfrontend.vercel.app/"
        />
        <ProjectCard
          id="2"
          title="Blog Creator API"
          src={ProjectTwo}
          technology="Node | React | Express | MongoDB | 
         Mongoose ORM"
          description="Designed with Model-View-Controller architecture and the blazingly fast RESTful API framework. Online users can signup for an account. Once authenticated, they can create, save, edit and view blog entries."
          styles="text-black bg-orange-50"
          textColor="text-black"
          buttonColor="hover:bg-indigo-500 bg-white hover:text-white"
          websiteAddress="https://blog-creator-mern-app.herokuapp.com/"
          githubAddress="https://github.com/Earth-Hominid/Blog-Creator-API"
          fillColor="group-hover:fill-white"
        />
        <ProjectCard
          id="3"
          title="Chair Mart"
          src={ProjectThree}
          technology="React | React Router | Jest | Styled - Components"
          description="An E-commerce Furniture Store mock-up with shopping cart"
          styles="text-black bg-yellow-50"
          textColor="text-black"
          buttonColor="hover:bg-[#ffe0c3] bg-white"
          websiteAddress="https://earth-hominid.github.io/Chair-Mart/"
          githubAddress="https://github.com/Earth-Hominid/Chair-Mart"
          fillColor="group-hover:fill-black"
        />
        <ProjectCard
          id="4"
          title="Seed Bank - Inventory Managment System"
          description="With a discord inspired theme, clean UI, MVC architecture and data validation, this ExpressJS Full Stack CRUD application ensures you have full control of your inventory."
          src={ProjectFour}
          technology="React | Express | MongoDB | Mongoose | PUG | TailwindCSS"
          textColor="text-stone-900"
          styles="bg-emerald-50"
          buttonColor="bg-white hover:text-indigo-500"
          websiteAddress="https://pure-brushlands-30098.herokuapp.com/catalog"
          githubAddress="https://github.com/Earth-Hominid/Seeds-Inventory-Catalog"
          fillColor="group-hover:fill-indigo-500"
        />
        <ProjectCard
          id="5"
          title="Memory Card Game"
          description="A MARVEL themed, one page modern React web app, built with Functional Components and Hooks."
          src={ProjectFive}
          technology="React | CSS3"
          textColor=""
          styles="bg-blue-100"
          buttonColor="bg-white hover:bg-[#16181D] hover:text-[#D3AF37]"
          websiteAddress="https://earth-hominid.github.io/Memory-Game/"
          githubAddress="https://github.com/Earth-Hominid/Memory-Game"
          fillColor="group-hover:fill-[#D3AF37]"
        />
        <ProjectCard
          id="6"
          title="Resume Builder"
          description="A modern one page web application providing users the ability to produce and format their own resume."
          src={ProjectSix}
          technology="React | CSS3"
          textColor=""
          styles="bg-indigo-100"
          buttonColor="bg-white hover:bg-[#02BD9D] hover:text-white"
          websiteAddress="https://earth-hominid.github.io/Resume-Builder-2.0/"
          githubAddress="https://github.com/Earth-Hominid/Resume-Builder-2.0"
          fillColor="group-hover:fill-white"
        />
      </CardContainer>
    </MainSection>
  );
};

export default ProjectSection;
