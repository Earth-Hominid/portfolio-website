import tw from 'tailwind-styled-components';

export const MainSection = tw.section`
  grid
  place-items-center
  min-h-screen
`;

export const MainContainer = tw.div`
  grid
  gap-4
  p-4
  max-w-5xl
  xs:grid-cols-2
`;

export const SectionTitle = tw.h1`
  text-4xl
  font-extrabold
  xs:col-span-2
  xs:grid
  xs:gap-4
  xs:grid-cols-2
  mb-2
  xs:mb-4
`;

export const Subheading = tw.p`
  xs:row-start-2 
  font-montserrat
  text-lg
  tracking-wide
  leading-relaxed
`;

export const BlueCard = tw.div`
  h-20 
  bg-blue-600
  xs:h-auto
  xs:square
`;

export const RoseCard = tw.div`
  h-12
  bg-rose-600
  xs:h-auto
  xs:square
`;
