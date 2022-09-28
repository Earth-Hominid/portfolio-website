import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

import { HamburgerContainer } from './Styles';

function TopNavigation({
  handleNavigationMenuClick,
  navigationMenuToggle,
}: {
  handleNavigationMenuClick: Function;
  navigationMenuToggle: boolean;
}) {
  return (
    <header className="sticky px-5 py-3 top-0 flex items-start justify-between max-w-7xl xl:w-full xl:max-w-none mx-auto bg-white z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <h2 className="text-2xl font-montserrat font-bold md:text-3xl">
          Chris Doll
        </h2>
      </motion.div>
      <div className="flex items-center w-full flex-row flex-1 justify-end mr-2 md:hidden">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <HamburgerContainer onClick={handleNavigationMenuClick}>
            {navigationMenuToggle ? (
              <XMarkIcon className="icon" />
            ) : (
              <Bars3Icon className="icon" />
            )}
          </HamburgerContainer>
        </motion.div>
      </div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="mr-5 hidden md:inline-flex "
      >
        <ul className="flex flex-row space-x-5 xl:space-x-10 font-poppins-poppins text-xl">
          <li>
            <Link
              href="#projects"
              className="hover:text-blue-600 cursor-pointer"
            >
              <div className="hover:text-blue-600 cursor-pointer">My Work</div>
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="cursor-pointer hover:text-blue-600"
            >
              <div className="hover:text-blue-600 cursor-pointer">Contact</div>
            </Link>
          </li>
        </ul>
      </motion.div>
    </header>
  );
}

export default TopNavigation;
