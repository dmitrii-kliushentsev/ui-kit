import { storiesOf } from '@storybook/react';

import { DarkFormGroup } from './dark-form-group';
import { Input } from '../inputs/input';
import { Textarea } from '../inputs/textarea';

storiesOf('DarkFormGroup with all props', module)
  .add('DarkFormGroup', () => (
    <DarkFormGroup label="Form" optional>
      <Input />
    </DarkFormGroup>
  ))
  .add('DarkFormGroup with optional prop', () => (
    <DarkFormGroup label="Form" optional>
      <Input />
    </DarkFormGroup>
  ))
  .add('DarkFormGroup with optional prop', () => (
    <DarkFormGroup label="Description" optional>
      <Textarea />
    </DarkFormGroup>
  ))
  .add('DarkFormGroup with actions prop', () => (
    <DarkFormGroup label="Form">
      <Input />
    </DarkFormGroup>
  ));
