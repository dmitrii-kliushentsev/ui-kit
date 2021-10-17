import 'twin.macro';
import { Field } from 'formik';

interface Field {
  label: React.ReactNode;
  name: string;
}

interface Props {
  fields: Field[];
}

export const DisabledFormGroup = ({ fields }: Props) => (
  <div tw="space-y-6 p-6 border border-monochrome-dark rounded leading-24 text-12">
    {fields.map(({ label, name }) => (
      <div>
        <div tw="text-monochrome-dark-tint font-bold">{label}</div>
        <Field name={name}>
          {({ field }: any) => <div tw="text-14 text-monochrome-light-tint">{field?.value}</div>}
        </Field>
      </div>
    ))}
  </div>
);
