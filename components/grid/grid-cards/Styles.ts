import tw from 'tailwind-styled-components/dist/tailwind';

export const CardContainer = tw.div`
  flex
  flex-col
  items-center
  rounded-xl
`;

export const CardTitle = tw.h4`
  text-black
  text-center
  font-bold
  text-lg
  font-rubik
  mt-2
  mb-4
`;

export const CardDescription = tw.p`
  text-gray-700
  font-montserrat
  text-center
  leading-relaxed
  tracking-
  max-w-xs
  mb-6
`;

export const TechnologyDescription = tw.p`
  text-center
  font-rubik
  max-w-xs
  mb-6
`;

export const ActionButtonHolder = tw.div`
  flex
  flex-row
  space-x-2
  mb-10
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
  transition
  duration-500
  group
`;

export const IconHolder = tw.div`
  h-6
  w-6
  ml-2
`;
