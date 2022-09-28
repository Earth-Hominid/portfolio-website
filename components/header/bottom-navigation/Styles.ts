import tw from 'tailwind-styled-components';

export const BottomNavigationMenu = tw.div`
 flex 
 justify-between 
 flex-col 
 w-full
 md:hidden
 bg-white
`;

export const ActionButtonHolder = tw.div`
  flex 
  flex-row
  space-x-2
  px-3
  pt-12
  pb-4
  text-2xl
  justify-center
  text-gray-800
`;

export const ActionLink = tw.a`
  hover:text-blue-600
`;
