import { Column } from 'react-table';

export type CustomColumn = Column &
{ textAlign?: 'center' | 'right' | 'left';
  width?: string;
  notSortable?: boolean;
  disableEllipsis?: boolean;
  filterable?: boolean;
  isCustomCell?: boolean
};
