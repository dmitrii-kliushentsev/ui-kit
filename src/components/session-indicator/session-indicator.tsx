import tw, { css, styled } from 'twin.macro';

import { path as circlePath } from './circle.path';
import { path as eyePath } from './eye.path';

interface Props {
  active?: boolean;
}

export const SessionIndicator = ({ active }: Props) => (
  <Wrapper viewBox="0 0 32 32">
    <g fillRule="nonzero" stroke="none" strokeWidth="1" fill="none">
      <CirclePath d={circlePath} />
      {active
        ? <EyePath d={eyePath} active data-test="session-indicator:active" />
        : <EyePath d={eyePath} data-test="session-indicator:inactive" />}
    </g>
  </Wrapper>
);

const Wrapper = styled.svg`
  width: 32px;
  height: 32px;
`;

const CirclePath = styled.path`
  fill: #00b602;
  transform-origin: 50% 50%;
  animation: rotation 2s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const EyePath = styled.path<{ active?: boolean }>`
  stroke: #00b602;
  stroke-width: 1.3;

  ${({ active }) => active && css`
    animation: blink 2s linear infinite;
    stroke: none;
    fill: #ee0000;
  `} 
  
  @keyframes blink {
    0% {
      ${tw`opacity-0`}
    }
    50% {
      ${tw`opacity-100`}
    }
    100% {
      ${tw`opacity-0`}
    }
  }
`;
