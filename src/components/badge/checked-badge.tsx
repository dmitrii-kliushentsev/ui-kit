import 'twin.macro';
import { Icons } from '../icon';

export const CheckedBadge = () => (
  <div tw="flex items-center justify-center w-3 h-3 rounded-full bg-green-default">
    <Icons.Check width={6} height={6} />
  </div>
);
