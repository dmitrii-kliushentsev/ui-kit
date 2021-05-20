/// <reference types="react" />
interface CircleDiagramValues {
    coverage: number;
    diameter: number;
    strokeWidth: number;
}
interface Props {
    className?: string;
    values: CircleDiagramValues;
    children?: React.ReactNode;
}
export declare const CircleDiagram: ({ className, values: { coverage, diameter, strokeWidth }, children, }: Props) => JSX.Element;
export {};
