import { storiesOf } from '@storybook/react';
import {
  Formik, Form, Field,
} from 'formik';
import { Fields } from '../../fields';
import 'twin.macro';
import { DarkFormGroup } from '../../dark-form-group';
import { DisabledFormGroup } from '../../disabled-form-group';
import { Inputs } from '..';

storiesOf('Input', module).add('Input types', () => (
  <div tw="p-10 bg-monochrome-dark100">
    <h1>Signup</h1>
    <Formik
      initialValues={{
        name: '',
        email: '',
        agentId: 'dev-pet',
        buildVersion: '1.1.1',
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
        <DisabledFormGroup fields={['agentId', 'buildVersion']} />
        <Field name="name" component={Fields.Input} placeholder="enter name" />
        <Field name="email" component={Fields.Input} placeholder="enter email" />
        <div tw="space-y-8">
          <DarkFormGroup label="Agent name">
            <Field name="name" component={Fields.DarkInput} placeholder="Enter agent's name" />
          </DarkFormGroup>
          <DarkFormGroup label="Agent type">
            <Field name="agentType" options={['Java', 'Js', '.Net']} component={Inputs.Select} placeholder="Enter agent's name" />
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
