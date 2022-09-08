import tw from 'tailwind-styled-components';

export const Navigation = tw.nav`
  md:flex
  flex-row
  w-full
  items-center
  hidden
`;

export const LogoHolder = tw.div`
  p-2
  mx-2
  whitespace-nowrap
`;

export const LogoText = tw.p`
  font-montserrat
  text-3xl
  font-semibold
  text-black
`;

export const ActionButtonsContainer = tw.div`
  flex
  flex-row-reverse
  mx-auto
  w-full

`;

export const ActionButtonHolder = tw.div`
  flex
  items-center
  p-2
  m-2
`;

export const ActionButtonLink = tw.a`
  text-black
  text-lg
  hover:underline-offset-4
  hover:underline
  decoration-blue-600
  decoration-wavy
  decoration-3
  decoration
  transition
  duration-300
  cursor-pointer
`;
