import { ColumnProps, Sort } from './table-types';
interface Props {
    className?: string;
    columns: ColumnProps[];
    sort?: Sort;
    onSort?: (sort: Sort) => void;
    gridTemplateColumns: string;
}
export declare const TableHeader: ({ columns, className, sort, onSort, gridTemplateColumns, }: Props) => JSX.Element;
export {};
