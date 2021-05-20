import { ReactNode } from 'react';
import { Sort } from './table-types';
interface Props {
    className?: string;
    data?: Array<{
        [key: string]: unknown;
    }>;
    children: any;
    idKey?: string;
    footer?: ReactNode;
    expandedRows?: string[];
    expandedColumns?: any[];
    expandedContentKey?: string;
    withoutHeader?: boolean;
    selectedRows?: string[];
    sort?: Sort;
    onSort?: (sort: Sort) => void;
    gridTemplateColumns?: string;
    gridExpandedTemplateColumns?: string;
}
export declare const Table: ({ className, data, children, idKey, footer, expandedRows, expandedColumns, expandedContentKey, withoutHeader, selectedRows, sort, onSort, gridTemplateColumns, gridExpandedTemplateColumns, }: Props) => JSX.Element;
export {};
