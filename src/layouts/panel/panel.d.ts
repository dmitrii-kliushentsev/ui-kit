interface Attrs {
    className?: string;
    align?: 'space-between' | 'end' | 'center';
    verticalAlign?: 'center' | 'stretch' | 'start' | 'end';
    direction?: 'row' | 'column';
    'data-test'?: string;
}
export declare const Panel: DOMComponent<Attrs>;
export declare const PanelItem: DOMComponent<{
    className?: string | undefined;
    children?: React.ReactNode;
    onClick: () => void;
}>;
export declare const PanelSpread: DOMComponent<{
    className?: string | undefined;
    children?: React.ReactNode;
}>;
export {};
