import { Inputs } from '../inputs';
import { fieldWrapper } from './field-wrapper';

type Keys = 'Input' | 'Search' | 'Textarea' | 'NumberInput' | 'DarkInput' | 'DarkTextarea';

export const Fields: Record<Keys, (...args: any) => JSX.Element> = {
  Input: fieldWrapper(Inputs.Text),
  Search: fieldWrapper(Inputs.Search),
  Textarea: fieldWrapper(Inputs.Textarea),
  NumberInput: fieldWrapper(Inputs.Number),
  DarkInput: fieldWrapper(Inputs.DarkInput),
  DarkTextarea: fieldWrapper(Inputs.DarkTextarea),
};
