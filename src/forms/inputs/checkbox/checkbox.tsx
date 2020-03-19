import * as React from 'react';
import { BEM, input } from '@redneckz/react-bem-helper';

import { Icons } from '../../../components/icon';
import { CheckboxProps } from './checkbox-types';

import styles from './checkbox.module.scss';

const checkbox = BEM(styles);

export const Checkbox = checkbox(
  ({
    className, onChange, checked, label, value,
  }: CheckboxProps) => {
    const handleOnChange = () => {
      onChange &&
        onChange({
          target: {
            type: 'checkbox',
            checked: !checked,
          },
        } as React.ChangeEvent<HTMLInputElement>);
    };
    return (
      <div className={className} onClick={handleOnChange}>
        <CheckboxInput name={value} checked={checked} />
        <CheckboxIconWrapper>
          <CheckMarkIcon width={10} height={7} />
        </CheckboxIconWrapper>
        {label && <Label>{label}</Label>}
      </div>
    );
  },
);

const CheckboxInput = checkbox.checkboxInput(
  input({ type: 'checkbox', checked: false, name: '' } as {
    type?: string;
    checked?: boolean;
    name?: string;
  }),
);
const CheckboxIconWrapper = checkbox.checkboxIconWrapper('div');
const CheckMarkIcon = checkbox.checkMarkIcon(Icons.Check);
const Label = checkbox.label('div');
