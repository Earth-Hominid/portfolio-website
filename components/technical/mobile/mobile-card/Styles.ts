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
text-black
dark:text-gray-200
  font-rubik
  text-3xl 
  underline 
  underline-offset-4
  leading-relaxed
  tracking-wide
`;

export const MobileDescription = tw.p`
  text-base 
  text-gray-700
  dark:text-gray-400
  font-montserrat 
  leading-relaxed
  tracking-wide 
  px-4 
  py-2
`;
