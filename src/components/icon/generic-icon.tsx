import tw, { styled } from 'twin.macro';

interface GenericIconProps {
  className?: string;
  path: string;
  viewBox: string;
  width?: number;
  height?: number;
  transform?: string;
  rotate?: number;
  fillRule?: 'inherit' | 'nonzero' | 'evenodd';
  onClick?: () => void;
}

export const GenericIcon = styled(({
  path, rotate = 0, className, onClick, ...rest
}: GenericIconProps) => (
  <div className={className} onClick={onClick}>
    <svg
      {...rest}
      transform={`rotate(${rotate})`}
      style={{ WebkitTransform: `rotate(${rotate}deg)` }}
    >
      {mapPath(path, (d: string, key: number) => (
        <path d={d} key={key} />
      ))}
    </svg>
  </div>
))`
  ${tw`inline-flex items-center justify-center fill-current`}
`;

function mapPath(path = '', mapper: (value: string, index: number) => JSX.Element) {
  return path
    .split(/[\r\n]+/)
    .filter(Boolean)
    .map(mapper);
}
