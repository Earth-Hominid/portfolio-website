import tw from 'tailwind-styled-components/dist/tailwind';

export const MainSection = tw.section`
  flex
  flex-col
  w-full
`;

export const SectionTitle = tw.h3`
  text-xl
  text-black
  text-center
`;

export const CardContainer = tw.div`
  w-full
  flex
  flex-col
  items-center
  md:hidden
`;
