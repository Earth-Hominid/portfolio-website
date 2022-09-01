import tw from 'tailwind-styled-components';

export const CardContainer = tw.div`
  flex
  flex-col
  space-y-1
  items-center
  max-w-md
  p-5
  m-4
  lg:my-10
  rounded-md
  hover:shadow-xl
`;

export const ImageHolder = tw.div`
  relative 
  h-64 
  w-96
  mb-4
`;

export const CardTitle = tw.h4`
  text-black
  font-bold
  text-lg
  font-rubik
`;

export const CardDescription = tw.p`
  text-gray-600
  font-montserrat
  text-center
  leading-relaxed
  tracking-normal
  px-5
  pt-2
`;

export const TechnologyDescription = tw.p`
  pt-4
  text-center
  font-rubik
`;
