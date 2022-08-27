import {} from '@heroicons/react/24/outline';
import MenuAccordian from './accordian/MenuAccordian';

import {
  BottomNavigationMenu,
  ActionButtonHolder,
  IconWrap,
  NavigationMenu,
  ButtonLink,
} from './Styles';

const BottomNavigation = () => {
  const BusinessObject = {
    title: 'My Work',
    datapoints: [{ name: '', id: '1', url: '/about/' }],
  };

  const LearningObject = {
    title: 'About',
    datapoints: [
      {
        name: 'About 1',
        id: '1',
        url: '',
      },
    ],
  };

  return (
    <BottomNavigationMenu>
      <ActionButtonHolder></ActionButtonHolder>
      <ActionButtonHolder></ActionButtonHolder>
      <NavigationMenu>
        <MenuAccordian props={LearningObject} />
        <MenuAccordian props={BusinessObject} />
      </NavigationMenu>
    </BottomNavigationMenu>
  );
};

export default BottomNavigation;
