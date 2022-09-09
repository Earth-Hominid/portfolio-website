import ProjectFour from '@/public/images/seeds.png';
import ProjectCard from './ProjectCard';

const GridCardFour = () => {
  return (
    <ProjectCard
      id="4"
      title="Seed Bank - Inventory Managment System"
      description="With a discord inspired theme, clean UI, MVC architecture and data validation, this ExpressJS Full Stack CRUD application ensures you have full control of your inventory."
      src={ProjectFour}
      technology="React | Express | MongoDB | Mongoose | PUG | TailwindCSS"
      textColor="text-stone-900"
      styles="bg-emerald-50 border-[1px] border-emerald-300 shadow-xl"
      buttonColor="bg-white hover:text-indigo-500"
      websiteAddress="https://pure-brushlands-30098.herokuapp.com/catalog"
      githubAddress="https://github.com/Earth-Hominid/Seeds-Inventory-Catalog"
      fillColor="group-hover:fill-indigo-500"
    />
  );
};

export default GridCardFour;
