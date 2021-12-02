import 'twin.macro';

interface Props {
  withIcon?: boolean;
  withSubLine?: boolean;
  className?: string;
}

export const Skeleton = ({ withIcon, withSubLine, className }: Props) => (
  <div tw="flex flex-col justify-center content-center h-full text-12" className={className}>
    <div tw="flex space-x-2 animate-pulse">
      {withIcon && <div tw="mt-1 rounded-full bg-monochrome-medium-tint h-4 w-4" />}
      <div tw="flex-1 space-y-4 py-1">
        <div tw="space-y-2">
          <div tw="w-1/2 h-4 bg-monochrome-medium-tint rounded" />
          {withSubLine && <div tw="w-full h-3 bg-monochrome-medium-tint rounded" />}
        </div>
      </div>
    </div>
  </div>
);
