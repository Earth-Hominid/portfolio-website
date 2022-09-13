import tw from 'tailwind-styled-components/dist/tailwind';

export const MainSection = tw.section`
  flex
  flex-col
  w-full
  items-center
  bg-gray-100
  md:hidden
`;

export const SectionTitle = tw.h3`
  text-3xl
  text-black
  text-center
  my-5
`;

export const CardContainer = tw.div`
  max-w-md
  my-4
  mx-2
`;
