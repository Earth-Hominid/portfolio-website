import ProjectThree from '@/public/images/chair.png';
import ProjectCard from './ProjectCard';

const GridCardThree = () => {
  return (
    <ProjectCard
      id="3"
      title="Chair Mart"
      src={ProjectThree}
      technology="React | React Router | Jest | Styled - Components"
      description="An E-commerce Furniture Store mock-up with shopping cart. Built with Modern React, Functional Components with Hooks. Simple State management with Context API."
      styles="text-black bg-gray-100 border-[1px] border-gray-300 shadow-xl"
      textColor="text-black"
      buttonColor="hover:bg-[#ffe0c3] bg-white"
      websiteAddress="https://earth-hominid.github.io/Chair-Mart/"
      githubAddress="https://github.com/Earth-Hominid/Chair-Mart"
      fillColor="group-hover:fill-black"
      titleStyles="text-[#ff7b54]"
    />
  );
};

export default GridCardThree;
