import tw from 'tailwind-styled-components';

export const CardContainer = tw.div`
   z-0 
  h-screen
  min-h-[850px]
  w-full
  flex 
  flex-col 
  overflow-hidden 
  max-w-full
  justify-evenly 
  mx-auto 
  items-center 
  bg-gray-100
  dark:bg-[#1D2433]

`;

export const Title = tw.h3`
   text-4xl
  leading-snug
  tracking-wide
  font-rubik
  text-center
  sm:text-5xl
  py-10
  text-black
  dark:text-gray-200
`;

export const Container = tw.div`
  flex
  max-w-full
  overflow-x-scroll 
  overflow-y-hidden
  space-x-10
  px-10
  pb-10
`;
