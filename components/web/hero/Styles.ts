import tw from 'tailwind-styled-components';

export const MainContainer = tw.section`
  w-full
  hidden
  md:flex
  md:flex-col
`;

export const Navigation = tw.nav`
  flex
  flex-row
  w-full
  items-center
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

export const ActionButtonText = tw.a`
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

export const Spacer = tw.div`
  w-full
  aspect-video
  bg-no-repeat
  bg-center
  bg-cover
`;

export const HeroTextContainer = tw.div`
  flex
  max-w-lg
  mt-20
  mx-40
  text-center
  justify-center
`;

export const HeroText = tw.h1`
  text-5xl
  leading-snug
  tracking-wide
  font-poppins
  text-left
  mx-3
`;

export const BlueUnderline = tw.span`
  underline-offset-8
  decoration-blue-600
  underline
  decoration-wavy
`;
