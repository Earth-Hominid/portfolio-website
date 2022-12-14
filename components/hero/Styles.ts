import tw from 'tailwind-styled-components';

export const MainContainer = tw.div`
  dark:bg-[#16181D]
  bg-white
   h-screen
  min-h-[950px]
`;

export const Spacer = tw.div`
aspect-video
  bg-center
  bg-cover
  bg-no-repeat
  h-screen
  min-h-[825px]
  xl:min-h-[105vh]
`;

export const HeroContainer = tw.div`
  flex
  flex-col
  items-center
  max-w-md
  sm:max-w-xl
  lg:max-w-3xl
  mx-auto
`;

export const HeroTextContainer = tw.div`
  text-center
  py-8
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
  text-black
  dark:text-gray-300
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
  dark:text-gray-400
  text-xl
  tracking-wider
  leading-relaxed
`;

export const BlueText = tw.span`
  text-blue-600
  dark:text-blue-400
  font-rubik
`;

export const IndigoText = tw.span`
  text-indigo-600
  dark:text-indigo-400
  font-rubik
`;

export const BlueUnderline = tw.span`
  underline-offset-4
  decoration-blue-600
  dark:decoration-blue-400
  underline
  decoration-wavy
`;

export const ActionButtonHolder = tw.div`
  flex 
  flex-row
  text-3xl
  justify-center
`;
