import tw from 'tailwind-styled-components';

export const MobileContainer = tw.div`
  flex 
  flex-col
  items-center 
  justify-center 
  space-y-6 
  my-6 
  mx-auto 
  max-w-md
  md:hidden
`;

export const MobileTitle = tw.h3`
  font-poppins 
  text-3xl 
  underline 
  underline-offset-2
`;

export const MobileDescription = tw.p`
  text-base 
  text-gray-700 
  font-montserrat 
  leading-normal 
  tracking-normal 
  px-4 
  py-2
`;

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
  lg:max-w-4xl
  mx-auto
  mt-20
`;

export const WebTitle = tw.h3`
  font-poppins 
  text-2xl 
  underline 
  underline-offset-2
`;

export const WebDescription = tw.p`
  text-base 
  text-gray-700 
  font-montserrat 
  leading-normal 
  tracking-normal 
  px-4 
  py-2
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
