import { useState } from 'react';
import tw, { styled } from 'twin.macro';
import { useClickOutside } from '../../../../hooks';
import { DarkInput } from '../dark-input';
import { Icons } from '../../../icon';

export const Select = ({ options, placeholder }: { options: string[]; placeholder: string; }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isListOpened, setIsListOpened] = useState(false);
  const node = useClickOutside(() => setIsListOpened(false));
  return (
    <div tw="w-[400px] space-y-1 text-monochrome-medium-tint" ref={node}>
      <div tw="relative hover:text-blue-medium-tint" onClick={() => setIsListOpened(!isListOpened)}>
        <DarkInput
          value={selectedOption}
          placeholder={placeholder}
          tw="caret-transparent cursor-pointer"
        />
        <Icons.Expander
          rotate={isListOpened ? -90 : 90}
          tw="absolute top-3 right-4 cursor-pointer"
        />
      </div>
      <div>
        {isListOpened && (
          <div tw="py-2 bg-monochrome-black border rounded border-monochrome-dark text-monochrome-medium-tint text-12 leading-20">
            {options.map((option) => (
              <Option
                selected={option === selectedOption}
                tw="px-4 py-1 hover:(cursor-pointer bg-monochrome-white bg-opacity-[0.1])"
                onClick={() => setSelectedOption(option)}
              >
                {option}
              </Option>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Option = styled.div`
  ${tw`px-4 py-1 hover:(cursor-pointer bg-monochrome-white bg-opacity-[0.1])`}
  ${({ selected }: { selected: boolean }) => selected && tw`text-blue-default`}
`;
