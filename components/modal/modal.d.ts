/// <reference types="react" />
interface Props {
    className?: string;
    children: React.ReactChild;
    onToggle: (isOpen: boolean) => void;
    isOpen: boolean;
}
export declare const Modal: ({ className, children, onToggle, isOpen, }: Props) => JSX.Element;
export {};
