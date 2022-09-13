import tw from 'tailwind-styled-components/dist/tailwind';

export const MainSection = tw.section`
  flex
  flex-col
  w-full
  items-center
  md:hidden
`;

export const SectionTitle = tw.h3`
  text-3xl
  text-black
  text-center
  mb-5
`;

export const CardContainer = tw.div`
  max-w-md
  my-4
  mx-2
`;
