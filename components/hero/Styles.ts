import tw from 'tailwind-styled-components';

export const HeroContainer = tw.footer`
  w-full
`;

export const ActionButtonHolder = tw.div`
  flex 
  flex-row
  text-2xl
  justify-center
  mb-20
  mt-10
  md:text-3xl
`;

export const HeroTextContainer = tw.div`
  text-center
  mt-20
  mx-5
`;

export const HeroText = tw.h1`
  text-2xl
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
  text-rose-600
  font-rubik
`;

export const IndigoText = tw.span`
  text-blue-600
  font-rubik
`;
