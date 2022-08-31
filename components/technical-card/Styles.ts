import tw from 'tailwind-styled-components';

export const CardContainer = tw.div`
  max-w-md
  py-10
  space-y-10
  flex
  flex-col
  justify-center
  items-center
`;

export const Title = tw.h2`
  uppercase
  underline
  underline-offset-4
  text-blue-600
  text-xl
  text-center
  font-rubik-rubik
`;

export const ImageHolder = tw.div`
  relative
  h-48
  w-48
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
