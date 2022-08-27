import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import {
  HamburgerContainer,
  ExtendedContainer,
  ButtonContainer,
} from './Styles';

const NavigationButtons = ({
  handleNavigationMenuClick,
  navigationMenuToggle,
}: {
  handleNavigationMenuClick: Function;
  navigationMenuToggle: boolean;
}) => {
  return (
    <>
      <ExtendedContainer>
        <ButtonContainer>Hellow</ButtonContainer>
        <HamburgerContainer onClick={handleNavigationMenuClick}>
          {navigationMenuToggle ? (
            <XMarkIcon className="icon" />
          ) : (
            <Bars3Icon className="icon" />
          )}
        </HamburgerContainer>
      </ExtendedContainer>
    </>
  );
};

export default NavigationButtons;
