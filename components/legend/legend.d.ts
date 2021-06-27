/// <reference types="react" />
interface LegendItem {
    color: string;
    borderColor?: string;
    label: React.ReactNode;
}
interface Props {
    className?: string;
    legendItems: LegendItem[];
}
export declare const Legend: ({ className, legendItems }: Props) => JSX.Element;
export {};
