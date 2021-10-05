import { storiesOf } from '@storybook/react';
import 'twin.macro';

import { IndicatorInEdge } from './indicator-in-edge';
import { CheckedBadge } from '../badge';

storiesOf('Indicator in edge', module)
  .add('Positions', () => (
    <div tw="flex gap-x-6">
      <IndicatorInEdge position="top-right">
        <div tw="bg-monochrome-default w-8 h-8" />
      </IndicatorInEdge>
      <IndicatorInEdge position="bottom-right">
        <div tw="bg-monochrome-default w-8 h-8" />
      </IndicatorInEdge>
    </div>
  )).add('With Content', () => (
    <div tw="flex gap-x-6 text-monochrome-white">
      <IndicatorInEdge position="top-right" indicatorContent={<CheckedBadge />}>
        <div tw="bg-monochrome-default w-8 h-8" />
      </IndicatorInEdge>
    </div>
  ));
