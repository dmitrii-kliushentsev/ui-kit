import { ColumnProps, Sort } from './table-types';
interface Props {
    className?: string;
    column: ColumnProps;
    sort?: Sort;
    onSort?: (sort: Sort) => void;
}
export declare const DefaultHeaderCell: ({ className, column: { name, label }, sort, onSort, }: Props) => JSX.Element;
export {};
