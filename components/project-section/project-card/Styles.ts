import tw from 'tailwind-styled-components';

export const CardContainer = tw.div`
  flex
  flex-col
  space-y-6
  items-center
  max-w-md
  p-5
  lg:my-10
  rounded-md
  hover:shadow-xl
`;

export const ImageHolder = tw.div`
  relative 
  h-64 
  w-96
  
`;

export const CardTitle = tw.h4`
  text-black
  font-bold
  text-lg
  font-rubik
`;

export const CardDescription = tw.p`
  text-gray-700
  font-montserrat
  text-center
  leading-relaxed
  tracking-normal
  px-5
`;

export const TechnologyDescription = tw.p`
  text-center
  font-rubik
`;

export const ActionButtonHolder = tw.div`
  flex
  flex-row
  space-x-2
`;

export const WebsiteButton = tw.button`
  flex
  flex-row
  items-center
  py-1
  px-4
  rounded-full
  bg-white
  shadow-md
  animate-bounce
  hover:animate-none
  transition
  duration-500
  group
`;

export const IconHolder = tw.div`
  h-6
  w-6
  ml-2
`;

export const GithubButton = tw.button``;

export const SVGHolder = tw.div`

`;
