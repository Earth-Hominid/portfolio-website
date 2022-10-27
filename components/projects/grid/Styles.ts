import tw from 'tailwind-styled-components';

export const MainSection = tw.section`
  lg:grid
  place-items-center
  hidden
  bg-gray-100
  dark:bg-[#1D2433]
  mb-4
`;

export const MainContainer = tw.div`
  grid
  gap-4
  p-4
  max-w-5xl
  xs:grid-cols-2
`;

export const TextContainer = tw.div`
  flex
  flex-col
  row-start-1
  grid-cols-2
  mx-2
  text-black
  dark:text-gray-200
`;

export const SectionTitle = tw.h1`
  text-4xl
  font-bold
  mb-2
  xs:mb-4
  font-rubik
`;

export const Subheading = tw.p`
  font-montserrat
  text-lg
  tracking-wide
  leading-relaxed
  md:text-lg
`;

export const BlueCard = tw.div`
  h-16
  border-[1px]
  border-gray-300
  shadow-xl
  xs:h-auto
  xs:square
  rounded-xl
`;

export const RoseCard = tw.div`
  h-16
  border-[1px]
  border-rose-300
  shadow-xl
  xs:h-auto
  xs:square
  rounded-xl
`;
