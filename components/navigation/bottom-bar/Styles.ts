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
  p-3
`;

export const NavigationMenu = tw.div`
`;

export const IconWrap = tw.div`
  h-5
  w-5 
  mr-1
`;

export const ButtonLink = tw.button`
  text-slate-500
  hover:text-indigo-600
  hover:bg-white
  px-2 
  py-1 
  rounded-lg
  cursor-pointer
  hover:border-indigo-600
  border-transparent
  border-2
  hover:border-2
  duration-300
  transition
  ease-in-out
  text-sm
  font-semibold
`;
