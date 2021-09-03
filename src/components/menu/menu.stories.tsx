import { storiesOf } from '@storybook/react';
import 'twin.macro';
import { Menu } from './menu';

storiesOf('Menu', module).add('Menu', () => (
  <div tw="flex justify-center w-full h-full">
    <Menu
      items={[
        {
          label: 'Rename',
          icon: 'Edit',
          onClick: () => {},
        },
        {
          label: 'Settings',
          icon: 'Settings',
          onClick: () => {},
        },
        {
          label: 'Agents list',
          icon: 'Agents',
          onClick: () => {},
        },
        {
          label: 'Logs',
          icon: 'Logs',
          onClick: () => {},
        },
      ]}
    />
  </div>
)).add('Menu with border', () => (
  <div tw="flex items-end justify-center w-full h-full">
    <Menu
      items={[
        {
          label: 'Rename',
          icon: 'Edit',
          onClick: () => {},
        },
        {
          label: 'Settings',
          icon: 'Settings',
          onClick: () => {},
        },
        {
          label: 'Agents list',
          icon: 'Agents',
          onClick: () => {},
        },
        {
          label: 'Logs',
          icon: 'Logs',
          onClick: () => {},
        },
      ]}
    />
  </div>
));
