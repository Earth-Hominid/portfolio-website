import tw from 'tailwind-styled-components';

export const HeaderContainer = tw.header`
  flex
  bg-white
  px-2
  py-4
  sticky
  top-0
  z-50
`;

export const ExtendedContainer = tw.div`
  flex 
  items-center 
  w-full 
  flex-row
  flex-1
  justify-end
  mr-2
`;

export const ButtonContainer = tw.div`
  flex-1
  items-center
  justify-end
  hidden
  md:inline-flex
 space-x-1
 mx-1
 lg:mx-2
 lg:space-x-6
`;

export const HamburgerContainer = tw.div`
 md:hidden
`;

export const LogoText = tw.p`
  font-montserrat
  text-2xl
  mx-4
  font-bold
  text-gray-700
`;
