import tw from 'tailwind-styled-components/dist/tailwind';

export const MainSection = tw.section`
  flex
  flex-col
  w-full
  md:hidden
`;

export const SectionTitle = tw.h3`
  text-3xl
  text-black
  text-center
  mb-5
`;

export const CardContainer = tw.div`
  w-full
  flex
  flex-col
  items-center
`;
