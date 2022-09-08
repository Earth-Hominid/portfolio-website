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
`;

export const LogoText = tw.p`
  font-montserrat
  text-4xl
  mx-10
  font-bold
  text-gray-600
 

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
  underline-offset-4
  decoration-blue-600
  underline
`;
