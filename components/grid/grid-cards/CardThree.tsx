import ProjectThree from '@/public/images/chair.png';
import ProjectCard from './ProjectCard';

const GridCardThree = () => {
  return (
    <ProjectCard
      id="3"
      title="Chair Mart"
      src={ProjectThree}
      technology="React | React Router | Jest | Styled - Components"
      description="An E-commerce Furniture Store mock-up with shopping cart"
      styles="text-black bg-yellow-50 border-[1px] border-[#FDFC56] shadow-xl"
      textColor="text-black"
      buttonColor="hover:bg-[#ffe0c3] bg-white"
      websiteAddress="https://earth-hominid.github.io/Chair-Mart/"
      githubAddress="https://github.com/Earth-Hominid/Chair-Mart"
      fillColor="group-hover:fill-black"
    />
  );
};

export default GridCardThree;
