import { useState } from 'react';
import { motion } from 'framer-motion';
import TopNavigation from './top-navigation/TopNavigation';
import BottomNavigation from './bottom-navigation/BottomNavigation';

interface Variants {
  variants: {
    open: {
      opacity: number;
      y: number;
      transition: {
        type: string;
        stiffness: number;
        damping: number;
      };
    };
    closed: {
      opacity: number;
      y: number;
      transition: {
        duration: number;
      };
    };
  };
}

const variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Header = ({
  handleToggleThemeClick,
  darkMode,
}: {
  handleToggleThemeClick: Function;
  darkMode: boolean | undefined;
}) => {
  const [navigationMenuToggle, setNavigationMenuToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigationButton = () => {
    if (navigationMenuToggle) {
      setNavigationMenuToggle(false);
      setIsOpen(navigationMenuToggle);
    } else {
      setNavigationMenuToggle(true);
      setIsOpen(navigationMenuToggle);
    }
  };

  const handleNavigationMenuClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    toggleNavigationButton();
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <TopNavigation
        handleNavigationMenuClick={handleNavigationMenuClick}
        navigationMenuToggle={navigationMenuToggle}
        handleToggleThemeClick={handleToggleThemeClick}
        darkMode={darkMode}
      />
      {navigationMenuToggle ? (
        <BottomNavigation
          handleNavigationMenuClick={handleNavigationMenuClick}
          navigationMenuToggle={navigationMenuToggle}
          toggleNavigationButton={toggleNavigationButton}
        />
      ) : (
        ''
      )}
    </>
  );
};
export default Header;
