import { Icons } from '../icon';
interface MenuItemType {
    label: string;
    icon: keyof typeof Icons;
    onClick: () => void;
    Content?: (props: {
        children: JSX.Element;
    }) => JSX.Element;
}
interface Props {
    items: MenuItemType[];
    bordered?: boolean;
    testContext?: string;
}
export declare const Menu: ({ items, bordered, testContext, }: Props) => JSX.Element;
export {};
