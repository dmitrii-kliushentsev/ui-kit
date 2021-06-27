/// <reference types="react" />
declare type Message = 'SUCCESS' | 'ERROR' | 'WARNING' | 'INFO';
interface Props {
    className?: string;
    children?: React.ReactNode;
    type: Message;
}
export declare const GeneralAlerts: ({ className, children, type, }: Props) => JSX.Element;
export {};
