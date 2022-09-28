import tw from 'tailwind-styled-components';

export const CallToActionButton = tw.button`
  bg-white
  py-5
  px-10
  rounded-lg
  hover:shadow-lg
  font-rubik
  flex
  items-center
  relative
  tracking-wider
`;

export const RelativeContainer = tw.div`
  relative
  group
`;

export const AbsoluteContainer = tw.div`
  absolute
  rounded-lg
  -inset-0.5
  bg-gradient-to-r
  from-blue-500 to-indigo-500
  opacity-90
  blur-sm
  group-hover:opacity-100
  transition
  group-hover:duration-300
  duration-1000
`;

export const ActionButtonSecondSpan = tw.span`
  text-blue-500
  group-hover:text-blue-600
`;

export const IconHolder = tw.div`
  h-6
  w-6
  group-hover:h-8
  group-hover:w-8
  text-blue-400
  duration-500
  ease-in-out
  transition
  group-hover:text-blue-600
`;
