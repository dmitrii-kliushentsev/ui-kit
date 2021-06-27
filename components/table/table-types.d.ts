/// <reference types="react" />
export declare type Cell = React.ComponentType<any>;
export declare type Order = 'ASC' | 'DESC' | null;
export declare type Align = 'start' | 'end' | 'center' | 'stretch';
export interface Sort {
    field: string;
    order: Order;
}
export interface ColumnProps {
    name: string;
    Cell?: Cell;
    HeaderCell?: (props: {
        column: ColumnProps;
    }) => JSX.Element;
    label?: React.ReactNode;
    align?: Align;
}
export interface ExpandSchema {
    key: string;
    columns: React.ReactNode | React.ReactNode[];
    children: ExpandSchema;
}
