import { storiesOf } from '@storybook/react';

import { useState } from 'react';
import { Panel } from './panel';

storiesOf('Panel', module).add('Panel', () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Panel header={<div>Select Agent</div>} isOpen={isOpen} onClosePanel={() => setIsOpen(false)}>
      <div style={{ width: '400px' }} />
    </Panel>
  );
});
