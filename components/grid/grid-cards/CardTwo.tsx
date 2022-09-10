import ProjectTwo from '@/public/images/vivacity.png';
import ProjectCard from './ProjectCard';

const GridCardTwo = () => {
  return (
    <ProjectCard
      id="2"
      title="Blog Creator API"
      src={ProjectTwo}
      technology="Node | React | Express | MongoDB | 
         Mongoose ORM"
      description="Designed with Model-View-Controller architecture and the blazingly fast RESTful API framework. Online users can signup for an account. Once authenticated, they can create, save, edit and view blog entries."
      styles="text-black bg-gray-100 border-gray-300 border-[1px] shadow-xl"
      textColor="text-black"
      buttonColor="hover:bg-indigo-500 bg-white hover:text-white"
      websiteAddress="https://blog-creator-mern-app.herokuapp.com/"
      githubAddress="https://github.com/Earth-Hominid/Blog-Creator-API"
      fillColor="group-hover:fill-white"
      titleStyles="text-indigo-500"
    />
  );
};

export default GridCardTwo;
