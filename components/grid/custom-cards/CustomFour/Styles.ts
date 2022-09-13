import tw from 'tailwind-styled-components/dist/tailwind';

export const CardContainer = tw.div`
  flex
  flex-col
  items-center
  rounded-xl
`;

export const CardTitle = tw.h4`
  uppercase
  underline-offset-2
  underline
  text-center
  lg:text-lg
  font-extrabold
  font-rubik
  my-3
  lg:my-4
  text-[#ff7b54]
`;

export const CardDescription = tw.p`
  text-gray-700
  font-montserrat
  text-center
  text-sm
  lg:text-base
  leading-relaxed
  tracking-wide
  max-w-xs
  mb-3
  lg:mb-4
`;

export const TechnologyDescription = tw.p`
  text-center
  font-rubik
  max-w-xs
  text-sm
  lg:text-lg
  mb-4
  lg:mb-6
`;

export const ActionButtonHolder = tw.div`
  flex
  flex-row
  space-x-4
  text-sm
  lg:text-base
  mb-3
  lg:mb-5
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

export const Wavy = tw.span`
  underline
  underline-offset-4
  decoration-wavy
  decoration-indigo-600
`;
