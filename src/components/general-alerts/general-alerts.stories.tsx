import React from 'react';
import { storiesOf } from '@storybook/react';

import { GeneralAlerts } from './general-alerts';
import { Spinner } from '../spinner';

storiesOf('GeneralAlerts', module)
  .add('SUCCESS', () => (
    <GeneralAlerts type="SUCCESS">
      Success message example. Something good happened!
    </GeneralAlerts>
  ))
  .add('ERROR', () => (
    <GeneralAlerts type="ERROR" />
  ))
  .add('WARNING', () => (
    <GeneralAlerts type="WARNING">
      Warning message example. Something affects product usage.
    </GeneralAlerts>
  ))
  .add('INFO', () => (
    <GeneralAlerts type="INFO" />
  ))
  .add('WARNING alert with component', () => (
    <GeneralAlerts type="INFO">
      please wait...
      <Spinner />
    </GeneralAlerts>
  ));
