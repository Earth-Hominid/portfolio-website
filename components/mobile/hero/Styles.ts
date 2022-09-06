import tw from 'tailwind-styled-components';

export const HeroContainer = tw.section`
  w-full
  md:hidden
`;

export const HeroTextContainer = tw.div`
  text-center
  mt-6
  mx-5
`;

export const HeroText = tw.h1`
  text-4xl
  leading-snug
  tracking-wide
  font-poppins
  text-left
  mx-3
`;

export const SubHeroContainer = tw.div`
  flex
  justify-center
  items-center
  m-8
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
