import ProjectOne from '@/public/images/learning.png';
import ProjectCard from './ProjectCard';

const GridCardOne = () => {
  return (
    <ProjectCard
      id="1"
      title="Business Learning Platform"
      src={ProjectOne}
      technology="TypeScript | Node | PostgreSQL | NextJS |  StrapiJS Headless CMS"
      description="An easy to use web application that strengthens business organizations by providing infrastructure for learning and secure collaboration."
      styles="text-black bg-rose-50 border-rose-300 border-[1px] shadow-xl"
      textColor="text-black"
      buttonColor="hover:bg-rose-300 bg-white text-black transition duration-300 hover:text-white"
      fillColor="group-hover:fill-white"
      githubAddress="https://github.com/Earth-Hominid/Business-Communication-Platform-Full-Stack"
      websiteAddress="https://rbsdocsfrontend.vercel.app/"
    />
  );
};

export default GridCardOne;
