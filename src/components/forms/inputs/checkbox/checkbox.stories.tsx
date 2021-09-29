import { storiesOf } from '@storybook/react';
import 'twin.macro';

import { Checkbox } from './checkbox';

storiesOf('Checkbox', module).add('Checkbox', () => (
  <div tw="flex gap-4 p-4 bg-monochrome-dark">
    <label tw="text-blue-default">
      <Checkbox />
    </label>
    <label tw="text-red-default">
      <Checkbox />
    </label>
    <Checkbox />
  </div>
));
