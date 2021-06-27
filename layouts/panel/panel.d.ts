/// <reference types="react" />
interface Attrs {
    className?: string;
    align?: 'space-between' | 'end' | 'center';
    verticalAlign?: 'center' | 'stretch' | 'start' | 'end';
    direction?: 'row' | 'column';
    'data-test'?: string;
}
export declare const Panel: import("react").ComponentType<Attrs & DOMAttrs>;
export declare const PanelItem: import("react").ComponentType<{
    className?: string | undefined;
    children?: React.ReactNode;
    onClick: () => void;
} & DOMAttrs>;
export declare const PanelSpread: import("react").ComponentType<{
    className?: string | undefined;
    children?: React.ReactNode;
} & DOMAttrs>;
export {};
