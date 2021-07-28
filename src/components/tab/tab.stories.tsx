import { storiesOf } from '@storybook/react';

import { Tab } from './tab';

storiesOf('Tabs', module).add('Tabs', () => (
  <div>
    <Tab active>General</Tab>
    <Tab name="system">System</Tab>
  </div>
));
