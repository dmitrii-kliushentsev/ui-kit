import React from 'react';
import renderer from 'react-test-renderer';
import { GeneralAlerts } from './general-alerts';

const ALERT_MESSAGE = 'ALERT_MESSAGE';

describe('GeneralAlerts', () => {
  it('should match snapshot with type is ERROR', () => {
    const tree = renderer.create(<GeneralAlerts type="ERROR">{ALERT_MESSAGE}</GeneralAlerts>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with type is SUCCESS', () => {
    const tree = renderer.create(<GeneralAlerts type="SUCCESS">{ALERT_MESSAGE}</GeneralAlerts>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with type is WARNING', () => {
    const tree = renderer.create(<GeneralAlerts type="WARNING">{ALERT_MESSAGE}</GeneralAlerts>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with type is INFO', () => {
    const tree = renderer.create(<GeneralAlerts type="INFO">{ALERT_MESSAGE}</GeneralAlerts>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
