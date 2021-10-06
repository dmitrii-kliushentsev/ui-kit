import 'twin.macro';
import { Field } from 'formik';

interface Props {
  fields: string[];
}

export const DisabledFormGroup = ({ fields }: Props) => (
  <div tw="space-y-6 p-6 border border-monochrome-dark rounded leading-24 text-12">
    {fields.map((name) => (
      <div>
        <div tw="text-monochrome-dark-tint font-bold">AGENT ID</div>
        <Field name={name}>
          {({ field }: any) => <div tw="text-14 text-monochrome-light-tint">{field?.value}</div>}
        </Field>
      </div>
    ))}
  </div>
);
