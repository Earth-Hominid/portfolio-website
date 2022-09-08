import tw from 'tailwind-styled-components';

export const MainContainer = tw.section`
  w-full
  hidden
  md:flex
  
`;

export const HorizontalContainer = tw.div`
  flex
  flex-row
  justify-center
  items-center
  max-w-2xl
  mx-auto
  mt-10
`;

export const ImageHolder = tw.div`
  min-w-fit
`;

export const TextHolder = tw.div`
  px-8 py-12
  flex
  flex-col
`;

export const CardTitle = tw.h2`
  text-left
  mb-2
  font-bold
  text-3xl
  font-rubik
  whi
`;

export const CardText = tw.p`
  text-left
  text-lg
  font-montserrat
  font-semibold
`;
