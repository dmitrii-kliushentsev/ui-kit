import React, { useState } from 'react';
import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import { SearchInput } from './search-input';

export default {
  title: 'SearchInput',
  component: SearchInput,
} as ComponentMeta<typeof SearchInput>;

export const Default = () => {
  const [value, setValue] = useState('');
  return (
    <div tw="bg-monochrome-white w-full h-full p-10">
      <SearchInput
        placeholder="enter text..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
        reset={() => setValue('')}
      />
    </div>
  );
};
