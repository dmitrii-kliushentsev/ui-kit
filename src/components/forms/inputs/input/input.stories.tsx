import { storiesOf } from '@storybook/react';
import {
  Formik, Form, Field,
} from 'formik';
import { Fields } from '../../fields';
import 'twin.macro';
import { DarkFormGroup } from '../../dark-form-group';

storiesOf('Input', module).add('Input types', () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        name: '',
        email: '',
      }}
      onSubmit={values => {
        alert(JSON.stringify(values));
      }}
      validate={values => {
        const errors = {} as any;

        if (!values.name) {
          errors.name = 'Required';
        }

        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
    >
      <Form tw="w-40 space-y-4">
        <Field name="name" component={Fields.Input} placeholder="enter name" />
        <Field name="email" component={Fields.Input} placeholder="enter email" />
        <div tw="space-y-8">
          <div tw="space-y-6 p-6 border border-monochrome-dark rounded">
            <div>
              <div tw="text-12 leading-24 text-monochrome-dark-tint font-bold">AGENT ID</div>
              <Field name="id">
                {({ field }: any) => <div tw="text-12 leading-24 text-monochrome-light-tint">{field?.value}</div>}
              </Field>
            </div>
            <div>
              <div tw="text-14 leading-24 text-monochrome-dark-tint">TYPE</div>
              <Field name="agentType">
                {({ field }: any) => <div tw="text-12 leading-24 text-monochrome-light-tint">{field?.value}</div>}
              </Field>
            </div>
          </div>
          <DarkFormGroup label="Agent name">
            <Field name="name" component={Fields.DarkInput} placeholder="Enter agent's name" />
          </DarkFormGroup>
          <DarkFormGroup label="Description" optional>
            <Field
              name="description"
              component={Fields.DarkTextarea}
              normalize={(str: string) => str.replace(/(?:(?:\r\n|\r|\n)\s*){2}/gm, '')}
              placeholder="Add agent's description"
            />
          </DarkFormGroup>
        </div>
        <button type="submit">submit</button>
      </Form>
    </Formik>
  </div>
));
