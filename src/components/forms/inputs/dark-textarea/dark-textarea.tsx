import tw, { styled } from 'twin.macro';

export const DarkTextarea = styled.textarea<{
  disabled?: boolean;
  error?: boolean;
  touched?: boolean;
}>`
  ${tw`
    appearance-none
    w-[400px] h-19 px-4 py-2
    box-border outline-none
    font-regular text-14 leading-24 text-monochrome-medium-tint
    bg-monochrome-black border rounded border-monochrome-dark
    placeholder-monochrome-dark
    focus:border-monochrome-white
    hover:border-monochrome-gray
    resize-y
  `}
  
    &::-webkit-scrollbar {
      ${tw`w-1 rounded bg-monochrome-light-tint`}
    };

    &::-webkit-scrollbar-thumb {
      ${tw`w-1 rounded bg-monochrome-dark`}
    };

  ${({ disabled, error, touched }) => [
    touched && error && tw`border-red-default`,
    disabled && tw`bg-monochrome-dark100 text-monochrome-dark`,
  ]}
`;
