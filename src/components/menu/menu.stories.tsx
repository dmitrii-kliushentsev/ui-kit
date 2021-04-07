import { storiesOf } from '@storybook/react';

import { Menu } from './menu';

storiesOf('Menu', module).add('Menu', () => (
  <div>
    <div style={{ margin: '250px' }}>
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
  </div>
)).add('Menu with border', () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Menu
      bordered
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
