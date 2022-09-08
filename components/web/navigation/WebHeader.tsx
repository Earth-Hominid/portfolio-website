import {
  Navigation,
  LogoText,
  LogoHolder,
  ActionButtonsContainer,
  ActionButtonHolder,
  ActionButtonLink,
} from './Styles';

const WebHeader = () => {
  return (
    <Navigation>
      <LogoHolder>
        <LogoText>Chris Doll</LogoText>
      </LogoHolder>
      <ActionButtonsContainer>
        <ActionButtonHolder>
          <ActionButtonLink href="#contact-section">Contact</ActionButtonLink>
        </ActionButtonHolder>
        <ActionButtonHolder>
          <ActionButtonLink href="#technical-section">
            Software Development
          </ActionButtonLink>
        </ActionButtonHolder>
        <ActionButtonHolder>
          <ActionButtonLink href="#project-section">My Work</ActionButtonLink>
        </ActionButtonHolder>
      </ActionButtonsContainer>
    </Navigation>
  );
};

export default WebHeader;
