import tw from 'tailwind-styled-components';

export const MainContainer = tw.section`
  w-full
  hidden
  md:flex
  flex-col
  decoration-wavy
`;

export const VerticalSpace = tw.div`
  pb-24
`;

export const HorizontalContainer = tw.div`
  flex
  flex-row
  justify-center
  max-w-2xl
  mx-auto
  mt-10
  mb-24
  py-2
`;

export const Spacer = tw.div`
  w-full
  aspect-video
  bg-no-repeat
  bg-center
  bg-cover
`;

export const ImageHolder = tw.div`
  min-w-fit
`;

export const TextHolder = tw.div`
  px-auto
  mx-8
  flex
  flex-col
`;

export const CardTitle = tw.h2`
  text-left
  mb-2
  font-bold
  text-3xl
  font-rubik
  whitespace-nowrap
`;

export const CardText = tw.p`
  text-left
  text-lg
  font-montserrat
  font-semibold
`;
