import React, { FC } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Panel } from './panel';
import { queryByDataTest } from '../../../test-utils';

const onToggle = jest.fn();
const portalRootElement = document.createElement('div');
portalRootElement.setAttribute('id', 'panel');

beforeEach(() => {
  onToggle.mockRestore();
});

interface TemplateProps {
  onClose?: () => void;
  isDisableFadeClick?: boolean;
}

const Template: FC<TemplateProps> = ({ onClose, isDisableFadeClick }) => (
  <Panel onClose={onClose}>
    <Panel.Content isDisableFadeClick={isDisableFadeClick}>
      <Panel.Header data-test="panel:header">
        <h2>Panel header</h2>
      </Panel.Header>
      <Panel.Body tw="px-4" data-test="panel:body">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, iure magni quia excepturi aliquid quas nostrum?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nisi corrupti dolorem incidunt quisquam.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ullam praesentium laudantium delectus...</p>
      </Panel.Body>
      <Panel.Footer data-test="panel:footer">
        Panel Footer
      </Panel.Footer>
    </Panel.Content>
  </Panel>
);

describe('Panel', () => {
  it('should render panel with header, body and footer', () => {
    const { container } = render(<Template />, {
      container: document.body.appendChild(portalRootElement),
    });
    expect(queryByDataTest(container, 'panel:header')).toBeInTheDocument();
    expect(queryByDataTest(container, 'panel:body')).toBeInTheDocument();
    expect(queryByDataTest(container, 'panel:footer')).toBeInTheDocument();
  });
  it('should close panel and run onClose click close button', () => {
    const { container } = render(<Template onClose={onToggle} />, {
      container: document.body.appendChild(portalRootElement),
    });
    fireEvent(
      queryByDataTest(container, 'panel:close-button') || document.body,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );
    expect(queryByDataTest(container, 'panel:header')).toBeNull();
    expect(queryByDataTest(container, 'panel:body')).toBeNull();
    expect(queryByDataTest(container, 'panel:footer')).toBeNull();
    expect(onToggle).toHaveBeenCalledTimes(1);
  });
  it('should close panel and run onClose click fade', () => {
    const { container } = render(<Template onClose={onToggle} />, {
      container: document.body.appendChild(portalRootElement),
    });
    fireEvent(
      queryByDataTest(container, 'panel:fade') || document.body,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );
    expect(queryByDataTest(container, 'panel:header')).toBeNull();
    expect(queryByDataTest(container, 'panel:body')).toBeNull();
    expect(queryByDataTest(container, 'panel:footer')).toBeNull();
    expect(onToggle).toHaveBeenCalledTimes(1);
  });
});
