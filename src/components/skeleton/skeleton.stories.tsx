import { storiesOf } from '@storybook/react';

import { Skeleton } from './skeleton';

storiesOf('Skeleton', module).add('Skeleton', () => (
  <div>
    <Skeleton />
    <Skeleton withIcon />
    <Skeleton withIcon withSubLine />
  </div>
));
