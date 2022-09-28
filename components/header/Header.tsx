import { useState } from 'react';
import TopNavigation from './top-navigation/TopNavigation';
import BottomNavigation from './bottom-navigation/BottomNavigation';

const Header = () => {
  const [navigationMenuToggle, setNavigationMenuToggle] = useState(false);

  const toggleNavigationButton = () => {
    if (navigationMenuToggle) {
      setNavigationMenuToggle(false);
    } else {
      setNavigationMenuToggle(true);
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
      />
      {navigationMenuToggle ? (
        <BottomNavigation
          handleNavigationMenuClick={handleNavigationMenuClick}
          navigationMenuToggle={navigationMenuToggle}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default Header;
