import LogoContainer from './LogoContainer';
import NavigationButtons from './NavigationButtons';
import { HeaderContainer } from './Styles';

const Navigation = ({
  handleNavigationMenuClick,
  navigationMenuToggle,
}: {
  handleNavigationMenuClick: Function;
  navigationMenuToggle: boolean;
}) => {
  return (
    <>
      <HeaderContainer>
        <LogoContainer />
        <NavigationButtons
          handleNavigationMenuClick={handleNavigationMenuClick}
          navigationMenuToggle={navigationMenuToggle}
        />
      </HeaderContainer>
    </>
  );
};

export default Navigation;
