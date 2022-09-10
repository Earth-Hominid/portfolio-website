import ProjectFive from '@/public/images/memory.png';
import ProjectCard from './ProjectCard';

const GridCardFive = () => {
  return (
    <ProjectCard
      id="5"
      title="Memory Card Game"
      description="A MARVEL themed, one page modern React web app, built with Functional Components and Hooks."
      src={ProjectFive}
      technology="React | CSS3"
      textColor=""
      styles="bg-gray-100 border-[1px] shadow-xl border-gray-300"
      buttonColor="bg-white hover:bg-[#16181D] hover:text-[#D3AF37]"
      websiteAddress="https://earth-hominid.github.io/Memory-Game/"
      githubAddress="https://github.com/Earth-Hominid/Memory-Game"
      fillColor="group-hover:fill-[#D3AF37]"
      titleStyles="text-red-700"
    />
  );
};

export default GridCardFive;
