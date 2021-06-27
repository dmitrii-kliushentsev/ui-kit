/// <reference types="react" />
export declare function useElementSize<E extends HTMLElement>(ref: React.RefObject<E>): {
    width: number;
    height: number;
};
