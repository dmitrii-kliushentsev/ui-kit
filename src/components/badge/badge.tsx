import tw, { styled } from 'twin.macro';

interface Props {
  children?: React.ReactNode;
  bold?: boolean;
  color?: 'green' | 'orange' | 'gray' | 'red';
}

export const Badge = styled.span<Props>`
  ${tw`px-2 pt-[1px] h-[20px] rounded-[16px] border text-12 leading-16`}
  ${({ bold }) => bold && tw`font-bold`}
  ${({ color }) => [
    color === 'gray' && tw`text-monochrome-default`,
    color === 'green' && tw`text-green-medium-tint`,
    color === 'orange' && tw`text-orange-default`,
    color === 'red' && tw`text-red-default`,
  ]}
`;
