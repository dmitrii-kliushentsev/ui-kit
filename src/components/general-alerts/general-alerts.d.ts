/// <reference types="react" />
interface Props {
    className?: string;
    children?: React.ReactNode;
    type: 'SUCCESS' | 'ERROR' | 'WARNING' | 'INFO';
}
export declare const GeneralAlerts: ({ className, children, type, }: Props) => JSX.Element;
export {};
