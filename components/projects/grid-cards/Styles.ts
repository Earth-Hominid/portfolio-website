import tw from 'tailwind-styled-components';

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
`;

export const TechIconContainer = tw.div`
  flex 
  flex-row 
  items-center 
  justify-center 
  space-x-3
`;

export const CardDescription = tw.p`
dark:text-white
  text-gray-800
  font-rubik
  text-center
  text-sm
  md:text-base
  leading-relaxed
  tracking-wide
  mx-auto
  max-w-xs
  lg:max-w-sm
`;

export const TechnologyDescription = tw.p`
  text-center
  font-rubik
  max-w-xs
  lg:max-w-sm
  md:text-xs
  lg:text-sm
  text-black
`;

export const ActionButtonHolder = tw.div`
  flex
  flex-row
  space-x-4
  text-sm
  lg:text-base
  pb-5
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
  decoration-blue-600
`;

export const DarkBlueWavy = tw.span`
  underline
  underline-offset-4
  decoration-wavy
  decoration-[#4FBCFF]
`;

export const DarkGreenWavy = tw.span`
  underline
  underline-offset-4
  decoration-wavy
  decoration-[#00B3A6]
`;

export const IndigoWavy = tw.span`
  underline
  underline-offset-4
  decoration-wavy
  decoration-indigo-600
`;

export const DarkIndigoWavy = tw.span`
  underline
  underline-offset-4
  decoration-wavy
  decoration-[#BB86FC]
`;

export const OrangeWavy = tw.span`
  underline
  underline-offset-4
  decoration-wavy
  decoration-[#ff7b54]
`;

export const RoseWavy = tw.span`
  underline
  underline-offset-4
  decoration-wavy
  decoration-rose-600
`;

export const BlackWavy = tw.span`
  underline
  underline-offset-4
  decoration-wavy
  decoration-black
`;

export const DarkRoseWavy = tw.span`
  underline
  underline-offset-4
  decoration-wavy
  decoration-rose-500
`;
