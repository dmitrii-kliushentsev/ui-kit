import tw, { styled } from 'twin.macro';

type Position = 'top-right' | 'bottom-right'

interface Props {
  children?: React.ReactNode;
  indicatorContent?: React.ReactNode;
  isHidden?: boolean;
  position?: Position;
}

export const IndicatorInEdge = ({
  indicatorContent, isHidden, position, children,
}: Props) => (
  <div tw="relative inline-flex">
    {children}
    <Wrapper isHidden={isHidden} position={position}>
      {indicatorContent || <div tw="rounded-lg w-2 h-2 bg-green-medium-tint" />}
    </Wrapper>
  </div>
);
export const Wrapper = styled.span<Props>`
  ${tw`absolute rounded-lg border-2 border-current-color`}
  ${({ isHidden }) => isHidden && tw`hidden`}
  ${({ position }) => position === 'top-right' && tw`top-0 right-0 transform translate-x-1/2 -translate-y-1/2`}
  ${({ position }) => position === 'bottom-right' && tw`bottom-0 right-0 transform translate-x-1/2 translate-y-1/2`}
`;
