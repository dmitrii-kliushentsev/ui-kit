/// <reference types="react" />
interface Props {
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
    size?: 'large' | 'small';
    disabled?: boolean;
    'data-test'?: string;
}
export declare const LinkButton: ({ className, children, ...rest }: Props) => JSX.Element;
export {};
