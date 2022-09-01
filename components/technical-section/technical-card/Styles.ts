import tw from 'tailwind-styled-components';

export const CardContainer = tw.div`
  flex
  flex-col
  max-w-md
  space-y-6
  px-4
  py-4
  items-center
  my-4
  lg:my-10
`;

export const Title = tw.h2`
  uppercase
  underline
  underline-offset-4
  text-center
  font-rubik
  font-bold
  text-lg
`;

export const ImageHolder = tw.div`
  relative
  h-24
  w-24
  flex-shrink-0
  rounded-lg
`;

export const ParagraphText = tw.p`
  leading-relaxed
  tracking-wide
  text-center
  text-gray-800
  font-montserrat
`;
