import { ReactElement } from 'react';
interface Props {
    className?: string;
    children: ReactElement | ReactElement[];
    activeTab: number | string;
    onSelect: (tabName: string) => void;
}
export declare const TabsPanel: (props: Props) => JSX.Element;
export declare const Tab: import("styled-components").StyledComponent<"button", any, {
    active?: boolean | undefined;
    disabled?: boolean | undefined;
}, never>;
export {};
