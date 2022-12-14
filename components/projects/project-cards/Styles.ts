import tw from 'tailwind-styled-components';

export const CardArticle = tw.div`
  flex 
  flex-col 
  items-center 
  flex-shrink-0 
  h-auto 
  max-w-sm
  border
  border-gray-300
  dark:border-gray-900
  shadow-xl  
  snap-center
  overflow-hidden
  space-y-6
  rounded-lg
`;

export const Title = tw.h3`
  text-xl
  uppercase
  underline-offset-2
  underline
  text-center
  font-rubik
  lg:text-lg
  `;

export const TechIconContainer = tw.div`
  flex 
  flex-row 
  items-center 
  justify-center 
  space-x-3
`;

export const Description = tw.p`
dark:text-white
text-gray-800
  font-rubik
  text-sm
  mx-auto
  text-center
  leading-relaxed
  tracking-wide
  max-w-xs`;

export const TechnologyDescription = tw.p`
  text-center
  font-rubik
  max-w-xs
  text-xs
`;

export const ActionButtonHolder = tw.div`
  flex
  flex-row
  space-x-4
  text-sm
  lg:text-base
  pb-2
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

export const DarkRoseWavy = tw.span`
  underline
  underline-offset-4
  decoration-wavy
  decoration-rose-500
`;

export const BlackWavy = tw.span`
  underline
  underline-offset-4
  decoration-wavy
  decoration-black
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
  duration-300
  group
`;

export const IconHolder = tw.div`
  h-6
  w-6
  ml-2
`;

export const TechIconHolder = tw.div`
  h-8
  w-8
rounded-lg
`;
