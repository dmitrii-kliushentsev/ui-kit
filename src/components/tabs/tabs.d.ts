import { ReactElement } from 'react';
interface Props {
    className?: string;
    children: ReactElement | ReactElement[];
    activeTab: number | string;
    onSelect: (tabName: string) => void;
}
export declare const TabsPanel: (props: Props) => JSX.Element;
export declare const Tab: DOMComponent<{
    name: string;
}>;
export {};
