/// <reference types="react" />
interface Props {
    className?: string;
    children?: React.ReactNode;
    label?: string;
    optional?: boolean;
    actions?: React.ReactNode;
}
export declare const FormGroup: ({ className, children, label, optional, actions, }: Props) => JSX.Element;
export {};
