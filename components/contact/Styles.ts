import tw from 'tailwind-styled-components/';

export const MainContainer = tw.div`
  w-full
  min-h-screen
  flex
  flex-col
  items-center
`;

export const SectionTitle = tw.h3`
  text-3xl
  font-poppins
  font-bold
  mt-16
`;

export const FormContainer = tw.div`
  container
  max-w-2xl
  px-5
  mx-auto
  md:py-2
`;

export const StyledForm = tw.form`
mt-10
  py-2
  px-5
  md:py-5
  md:px-10
  flex
  flex-col
  justify-center
  bg-white
  border
  border-gray-300 
  shadow-xl
  rounded-lg
`;

export const InputLabelContainer = tw.div`
  relative 
  mt-4
  flex
  flex-1
`;

export const StyledInput = tw.input`
  flex
  flex-1
  h-12
  peer
  border-b-2
  border-gray-200 
  border-dashed
  focus:outline-none 
  focus:border-blue-600 
  placeholder-transparent
  focus:invalid:border-pink-500
  focus:invalid:ring-pink-500
`;

export const WideTextArea = tw.textarea`
  block 
  p-2.5 
  w-full 
  text-sm 
  text-gray-900 
  bg-gray-50
  rounded-lg 
  border
  border-dashed 
  border-gray-300 
  focus:border-blue-600
  focus:ring-blue-600
  resize-none
`;

export const StyledLabel = tw.label`
text-stone-800 
  absolute 
  left-0  
  -top-3.5 
  text-sm
  md:text-base
  peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-600 peer-placeholder-shown:top-2 transition-all 
  peer-focus:-top-3.5
  peer-foucs:text-stone-600
  peer-focus:text-sm
`;

export const TextAreaLabel = tw.label`
  text-stone-600
  pt-6 
  pb-3
`;

export const FormButton = tw.button`
  bg-blue-500 
  p-2 
  rounded-md 
  text-white 
  w-full 
  text-base 
  hover:bg-white
  border-2
  border-blue-500
  hover:text-blue-500
  ease-in-out
  transition
  duration-300
`;
