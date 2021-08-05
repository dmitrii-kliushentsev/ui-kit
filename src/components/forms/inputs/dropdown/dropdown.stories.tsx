import { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Dropdown } from './dropdown';

storiesOf('Dropdown', module).add('Dropdown', () => {
  const [value, setValue] = useState('first item');
  return (
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
      selectedValue={value}
      action={(newValue) => setValue(newValue)}
    />
  );
});
