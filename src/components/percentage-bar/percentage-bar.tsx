import tw, { styled } from 'twin.macro';

interface Props {
  percentage: number;
}

export const PercentageBar = ({ percentage }: Props) => (
  <div tw="w-25 h-1 bg-data-visualization-scrollbar-thumb bg-opacity-30 rounded">
    <Progress style={{ width: `${percentage}%` }} percentage={percentage} />
  </div>
);

const Progress = styled.div`
    ${tw`h-1 rounded`};

    ${({ percentage }: Props) => [
    percentage === 100 && tw`bg-data-visualization-scrollbar-thumb`,
    percentage > 0 && percentage < 100 && tw`bg-data-visualization-coverage`,
  ]}
`;
