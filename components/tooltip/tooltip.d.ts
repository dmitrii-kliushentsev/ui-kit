/// <reference types="react" />
export interface Props {
    className?: string;
    message: React.ReactNode;
    children: React.ReactNode | React.ReactNode[];
    position?: 'top-center' | 'top-right' | 'top-left' | 'left' | 'right';
}
export declare const Tooltip: ({ className, message, children, position, }: Props) => JSX.Element;
