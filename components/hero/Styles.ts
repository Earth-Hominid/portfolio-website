import tw from 'tailwind-styled-components';

export const MainContainer = tw.div`
  w-full
  h-screen
`;

export const HeroContainer = tw.div`
  flex
  flex-col
  space-y-8
  items-center
  max-w-md
  sm:max-w-xl
  lg:max-w-3xl
  mx-auto
`;

export const HeroTextContainer = tw.div`
text-center
  py-5
  px-5
  sm:px-0
`;

export const HeroText = tw.h1`
  text-4xl
  leading-snug
  tracking-wide
  font-poppins
  text-left
  sm:text-5xl
  lg:text-6xl
  sm:p-1

`;

export const SubHeroContainer = tw.div`
  flex
  justify-center
  items-center
  my-12
`;

export const ParagraphContainer = tw.div`
  flex
  text-montserrat
  text-center
  break-words
  flex-wrap
  leading-relaxed
  tracking-wide
  text-lg
`;

export const ParagraphText = tw.p`
  text-black
  text-xl
  tracking-wider
  leading-relaxed
`;

export const BlueText = tw.span`
  text-blue-600
  font-rubik
`;

export const IndigoText = tw.span`
  text-indigo-600
  font-rubik
`;

export const BlueUnderline = tw.span`
  underline-offset-4
  decoration-blue-600
  underline
  decoration-wavy
`;

export const ActionButtonHolder = tw.div`
  flex 
  flex-row
  text-3xl
  justify-center
  mt-20
`;

export const Spacer = tw.div`
  w-full
  h-screen
  aspect-video
  bg-no-repeat
  bg-center
  bg-cover
`;
