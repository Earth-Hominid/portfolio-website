import tw from 'tailwind-styled-components';

export const CardContainer = tw.div`
  h-screen
 flex 
 relative 
 overflow-hidden 
 flex-col 
 max-w-full 
 px-10 
 justify-evenly 
 mx-auto 
 items-center 
 z-0 
 bg-gray-100
 md:hidden
`;

export const SectionTitle = tw.h3`
  absolute
  top-2
  text-3xl
  font-poppins
  text-black
  p-5
  text-center
  tracking-wide
`;

export const InsideContainer = tw.div`
  flex
  w-full
  overflow-x-scroll 
  overflow-y-hidden
  snap-x
  snap-mandatory
  mt-10
  md:mt-32
  space-x-5 
  p-10
`;
