import { BEM, div } from '@redneckz/react-bem-helper';

import styles from './striped-progress-bar.module.scss';

interface Props {
  className?: string;
  value?: string;
  type: 'primary' | 'secondary';
}

export const StripedProgressBar = ({ className, value = '', type }: Props) => {
  console.log(value);
  return (
    <Bar className={className} type={type} style={{ width: value }} data-test={`striped-progress-bar:${type}`} />
  );
};

const Bar = BEM(styles)(div({ type: 'primary', style: {}, 'data-test': '' } as {type: 'primary' | 'secondary'}));
