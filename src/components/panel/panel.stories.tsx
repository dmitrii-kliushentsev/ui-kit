import { storiesOf } from '@storybook/react';

import { useState } from 'react';
import { Panel } from './panel';
import { PanelWithCloseIcon } from './panel-with-close-icon';

storiesOf('Panel', module).add('Panel', () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Panel header={<div>Select Agent</div>} isOpen={isOpen} onClosePanel={() => setIsOpen(false)}>
      <div style={{ width: '400px' }} />
    </Panel>
  );
}).add('Panel with close icon', () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <PanelWithCloseIcon header={<div>Select Agent</div>} isOpen={isOpen} onClosePanel={() => setIsOpen(false)}>
      <div style={{ width: '500px' }} />
    </PanelWithCloseIcon>
  );
});
