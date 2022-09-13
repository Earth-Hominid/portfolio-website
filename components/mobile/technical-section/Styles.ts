import tw from 'tailwind-styled-components';

export const MainContainer = tw.section`
  flex
  flex-col
  w-full
  md:hidden
  decoration-wavy
`;

export const VerticalSpace = tw.div`
  pb-40
`;

export const VerticalContainer = tw.div`
  flex
  flex-col
  max-w-md
  space-y-6
  my-8
  items-center
  mx-auto
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
  mx-4
  py-4
  flex
  flex-col
`;

export const Title = tw.h2`
  text-center
  font-bold
  text-3xl
  font-rubik
  whitespace-nowrap
`;

export const CardText = tw.p`
  leading-relaxed
  tracking-wide
  text-center
  text-gray-700
  font-montserrat
  font-semibold
  pb-6
`;
