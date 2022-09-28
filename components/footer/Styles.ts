import tw from 'tailwind-styled-components';

export const FooterContainerSmall = tw.footer`
  w-full
  inset-x-0
  bottom-0
`;

export const MainContainer = tw.div`
  flex
  flex-col
  justify-center
  items-center
  mb-10
  space-y-2
`;

export const FooterText = tw.p`
 text-gray-600
 font-montserrat
 font-medium
 text-xl
 py-2
`;

export const LinkContainer = tw.div`
  flex
  flex-row
  items-center
`;

export const LinkText = tw.p`
  text-gray-600
  px-2
  cursor-pointer
  hover:underline
  decoration-wavy
  decoration-blue-600
  hover:underline-offset-4
`;

export const BorderContainer = tw.div`
  border-r-2
  border-gray-300
`;

export const IconHolder = tw.div`
  relative
  h-12
  w-12
  flex-shrink-0 
`;

export const BrandIconContainer = tw.div`
  flex
  flex-row
  items-center
  space-x-4
  p-2
`;
