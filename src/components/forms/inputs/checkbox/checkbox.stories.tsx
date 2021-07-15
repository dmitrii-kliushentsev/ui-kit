import { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Checkbox } from './checkbox';

storiesOf('Checkbox', module).add('Checkbox', () => {
  const [checkedFirst, setCheckedFirst] = useState(false);
  const [checkedSecond, setCheckedSecond] = useState(false);
  const [checkedThre, setCheckedThre] = useState(false);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
      <Checkbox
        color="monochrome-black"
        checked={checkedFirst}
        label={checkedFirst ? 'checked' : 'not checked'}
        onChange={() => setCheckedFirst(checkedFirst)}
      />
      <Checkbox
        checked={checkedSecond}
        label={checkedSecond ? 'checked' : 'not checked'}
        onChange={() => setCheckedSecond(!checkedSecond)}
      />
      <Checkbox
        checked={checkedThre}
        label="disable"
        onChange={() => setCheckedThre(!checkedThre) }
        disabled
      />
    </div>
  );
});
