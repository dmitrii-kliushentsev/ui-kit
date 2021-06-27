/// <reference types="react" />
interface FilterItem {
    name: string;
    checked: boolean;
}
declare type FilterState = {
    filterItems: FilterItem[];
    isExpanded: boolean;
};
declare type Action = ReturnType<typeof toggleFilter | typeof toggleAll | typeof setIsExpanded>;
export declare const toggleFilter: (name: string) => {
    readonly type: "TOGGLE_FILTER";
    readonly payload: string;
};
export declare const toggleAll: (checked: boolean) => {
    readonly type: "TOGGLE_ALL";
    readonly payload: boolean;
};
export declare const setIsExpanded: (checked: boolean) => {
    readonly type: "SET_IS_EXPANDED";
    readonly payload: boolean;
};
export declare const reducer: ({ filterItems, isExpanded }: FilterState, action: Action) => FilterState;
export declare const useFilter: (filters: string[]) => {
    isExpanded: boolean;
    filterItems: FilterItem[];
    selectedFilterItems: FilterItem[];
    dispatch: import("react").Dispatch<{
        readonly type: "TOGGLE_FILTER";
        readonly payload: string;
    } | {
        readonly type: "TOGGLE_ALL";
        readonly payload: boolean;
    } | {
        readonly type: "SET_IS_EXPANDED";
        readonly payload: boolean;
    }>;
};
export {};
