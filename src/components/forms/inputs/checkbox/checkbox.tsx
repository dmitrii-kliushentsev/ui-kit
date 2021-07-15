import tw, { styled, css } from 'twin.macro';

import { Icons } from '../../../icon';
import { CheckboxProps } from './checkbox-types';

export const Checkbox = ({
  onChange, checked, label, value, disabled, color = 'blue-default',
}: CheckboxProps) => {
  const handleOnChange = () => {
    console.log('asd')
    onChange &&
        onChange({
          target: {
            type: 'checkbox',
            checked: !checked,
          },
        } as React.ChangeEvent<HTMLInputElement>);
  };
  return (
    <Label onClick={handleOnChange} disabled={disabled}>
      <Input
        className={`text-${checked ? color : 'transparent'} border-${color}`}
        type='checkbox'
      />
      {label}
      <CheckMarkIcon/>
    </Label>
  );
};

const Label = styled.label<{disabled?: boolean}>`
  ${tw`relative inline-flex items-center gap-x-2 text-14 leading-20 text-monochrome-black cursor-pointer`}

  ${({ disabled }) => disabled && tw`opacity[0.3] pointer-events-none`}
`

const Input = styled.input`
  ${tw`w-4 h-4 border bg-current-color appearance-none rounded`}
`

const CheckMarkIcon = styled(Icons.Check)`
  ${tw`text-monochrome-white`}
  position: absolute;
  width: 10px;
  height: 10px;
  top: 5px;
  left: 3px;
`;
