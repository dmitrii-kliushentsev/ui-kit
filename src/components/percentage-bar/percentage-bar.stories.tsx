import { storiesOf } from '@storybook/react';
import 'twin.macro';

import { PercentageBar } from './percentage-bar';

storiesOf('PercentageBar', module).add('PercentageBar', () => (
  <div tw="space-y-2 p-5">
    <PercentageBar percentage={0} />
    <PercentageBar percentage={50} />
    <PercentageBar percentage={100} />
  </div>
));
