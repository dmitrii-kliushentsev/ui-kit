import { storiesOf } from '@storybook/react';
import 'twin.macro';

import { Cells } from './index';

storiesOf('Cells', module)
  .add('Clickable cell', () => <Cells.Clickable>Click</Cells.Clickable>)
  .add('Compound cell', () => <Cells.Compound cellName="Cell Name" cellAdditionalInfo="Info" />)
  .add('Coverage cell', () => <Cells.Coverage value={100} />)
  .add('Coverage progress cell', () => (
    <div>
      <Cells.CoverageProgress value={100} />
      <Cells.CoverageProgress value={50} />
      <Cells.CoverageProgress value={50.123} />
      <Cells.CoverageProgress value={50.0} />
      <Cells.CoverageProgress value={0} />
    </div>
  ))
  .add('Duration cell', () => <Cells.Duration value={0} />)
  .add('Test status cell', () => <Cells.TestStatus type="PASSED">AUTO</Cells.TestStatus>);
