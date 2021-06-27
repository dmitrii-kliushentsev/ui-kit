/// <reference types="react" />
interface Props {
    className?: string;
    children: React.ReactChild;
    header: React.ReactNode;
    onToggle: (isOpen: boolean) => void;
    isOpen: boolean;
    type?: 'info' | 'error';
    closeOnFadeClick?: boolean;
}
export declare const Popup: ({ className, header, children, onToggle, isOpen, type, closeOnFadeClick, }: Props) => JSX.Element;
export {};
