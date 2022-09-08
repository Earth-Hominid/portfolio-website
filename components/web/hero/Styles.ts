import tw from 'tailwind-styled-components';

export const MainContainer = tw.section`
  w-full
  hidden
  md:flex
  md:flex-col
`;

export const Spacer = tw.div`
  w-full
  aspect-video
  bg-no-repeat
  bg-center
  bg-cover
`;

export const HeroContainer = tw.div`
  flex
  max-w-xl
  mt-10
  mx-auto
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
