import tw from 'tailwind-styled-components';

export const MainContainer = tw.section`
  w-full
  hidden
  md:flex
`;

export const HeroContainer = tw.div`
  flex
  flex-col
  max-w-xl
  mt-10
  mx-auto
  text-center
  justify-center
  lg:hidden
`;

export const Spacer = tw.div`
  w-full
  aspect-video
  bg-no-repeat
  bg-center
  bg-cover
`;

export const HeroText = tw.h1`
  text-5xl
  leading-snug
  tracking-wide
  font-poppins
  text-center
  mx-3
`;

export const BlueUnderline = tw.span`
  underline-offset-8
  decoration-blue-600
  underline
  decoration-wavy
`;

export const SubHeroContainer = tw.div`
  flex
  justify-center
  items-center
  mx-auto
  mt-8
  max-w-lg
`;

export const ParagraphText = tw.p`
  text-black
  text-montserrat
  text-center
  leading-relaxed
  tracking-wide
  text-lg
`;

export const BlueText = tw.span`
  text-blue-600
  font-rubik
`;

export const IndigoText = tw.span`
  text-indigo-600
  font-rubik
`;

export const ActionButtonHolder = tw.div`
  flex 
  flex-row
  text-2xl
  justify-center
  mb-10
  mt-10
  md:text-3xl
`;
