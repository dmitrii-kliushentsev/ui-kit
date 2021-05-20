interface Props extends IconProps {
    className?: string;
}
interface IconProps {
    width?: number;
    height?: number;
    onClick?: () => void;
    viewBox?: string;
    rotate?: number;
    'data-test'?: string;
}
export declare const IconsTable: ({ className }: Props) => JSX.Element;
declare const IconProps: DOMComponent<{}>;
export {};
