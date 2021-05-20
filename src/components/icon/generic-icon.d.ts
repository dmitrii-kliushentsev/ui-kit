interface GenericIconProps {
    className?: string;
    path: string;
    viewBox: string;
    width?: number;
    height?: number;
    transform?: string;
    rotate?: number;
    fillRule?: 'inherit' | 'nonzero' | 'evenodd';
    onClick?: () => void;
}
export declare const GenericIcon: ({ path, rotate, ...rest }: GenericIconProps) => JSX.Element;
export {};
