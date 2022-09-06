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
  border-b-[1px]
`;

export const Title = tw.h2`
  text-center
  font-poppins
  font-bold
  text-3xl
`;

export const ParagraphText = tw.p`
  leading-relaxed
  tracking-wide
  text-center
  text-gray-700
  font-montserrat
  font-semibold
  pb-6
`;
