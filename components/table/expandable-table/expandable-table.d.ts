import { ReactNode } from 'react';
import { Sort } from '../table-types';
interface Props {
    data: object[];
    idKey: string;
    children: ReactNode;
    expandedColumns?: any[];
    expandedContentKey: string;
    secondLevelExpand?: any[];
    className?: string;
    hasSecondLevelExpand?: boolean;
    sort?: Sort;
    onSort?: (sort: Sort) => void;
    gridTemplateColumns?: string;
    gridExpandedTemplateColumns?: string;
}
export declare const ExpandableTable: ({ children, data, idKey, expandedColumns, className, expandedContentKey, sort, onSort, gridTemplateColumns, gridExpandedTemplateColumns, ...restProps }: Props) => JSX.Element;
export {};
