import ProjectSix from '@/public/images/resume-builder.png';
import ProjectCard from './ProjectCard';

const GridCardSix = () => {
  return (
    <ProjectCard
      id="6"
      title="Resume Builder"
      description="A modern one page web application providing users the ability to produce and format their own resume."
      src={ProjectSix}
      technology="React | CSS3"
      textColor=""
      styles="bg-indigo-100 border-[1px] shadow-xl border-indigo-300"
      buttonColor="bg-white hover:bg-[#02BD9D] hover:text-white"
      websiteAddress="https://earth-hominid.github.io/Resume-Builder-2.0/"
      githubAddress="https://github.com/Earth-Hominid/Resume-Builder-2.0"
      fillColor="group-hover:fill-white"
    />
  );
};

export default GridCardSix;
