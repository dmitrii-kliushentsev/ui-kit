interface Props {
    className?: string;
    item: {
        [key: string]: unknown;
    };
    columns: any[];
    index: number;
    color?: 'blue' | 'gray' | 'yellow';
    expandedColumns?: any[];
    expandedContentKey?: string;
    expandedRows?: string[];
    nested?: boolean;
    nestedLast?: boolean;
    gridTemplateColumns: string;
    gridExpandedTemplateColumns?: string;
}
export declare const TableRow: ({ className, item, columns, index, expandedContentKey, color, expandedColumns, expandedRows, gridTemplateColumns, gridExpandedTemplateColumns, }: Props) => JSX.Element;
export {};
