import { useState } from 'react';
import { storiesOf } from '@storybook/react';
import 'twin.macro';
import { Dropdown } from './dropdown';

storiesOf('Dropdown', module).add('Dropdown', () => {
  const [value, setValue] = useState('first item');
  return (
    <div tw="pt-[100px]">
      <Dropdown
        items={[
          {
            value: 'first item',
            label: 'first item',
          },
          {
            value: 'second item',
            label: 'second item with custom label',
          },
        ]}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </div>

  );
}).add('Dropdown with numeric value ', () => {
  const [timeStamp, setTimeStamp] = useState(60000);
  return (
    <Dropdown
      items={[
        {
          label: 'Last minute', value: 60000,
        },
        {
          label: 'Last 2 minutes', value: 120000,
        },
        {
          label: 'Last 3 minutes', value: 180000,
        },
        {
          label: 'Last 4 minutes', value: 240000,
        },
        {
          label: 'Last 5 minutes', value: 300000,
        },
        {
          label: 'Last 10 minutes', value: 600000,
        },
        {
          label: 'Last 30 minutes', value: 1800000,
        },
        {
          label: 'Last 1 hour', value: 3600000,
        },
        {
          label: 'Last 4 hours', value: 14400000,
        },
        {
          label: 'Last 8 hours', value: 28800000,
        },
        {
          label: 'Last 12 hours', value: 86400000,
        },
      ]}
      onChange={(newValue) => setTimeStamp(Number(newValue))}
      value={timeStamp}
    />
  );
});
