/// <reference types="react" />
interface Props {
    className?: string;
    children?: React.ReactNode;
    bold?: boolean;
    color?: 'green' | 'orange' | 'gray' | 'red';
}
export declare const Badge: ({ className, children }: Props) => JSX.Element;
export {};
