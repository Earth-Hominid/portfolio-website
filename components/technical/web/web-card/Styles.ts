import tw from 'tailwind-styled-components';

export const WebContainer = tw.div`
  hidden
  md:flex 
  flex-col
  w-full
`;

export const WebHorizontalContainer = tw.div`
  flex
  flex-row
  justify-center
  max-w-3xl
  mx-auto
`;

export const TextHolder = tw.div`
  px-auto
  mx-8
  flex
  flex-col
`;

export const CardTitle = tw.h2`
  text-black
  dark:text-gray-200
  text-left
  mb-2
  font-bold
  text-3xl
  font-rubik
  whitespace-nowrap
`;

export const CardText = tw.p`
  text-gray-700
  dark:text-gray-400
  text-left
  text-lg
  font-montserrat
  font-semibold
`;
