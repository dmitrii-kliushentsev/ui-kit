import { DependencyList, MutableRefObject, useLayoutEffect } from 'react';

type Callback = (entries: IntersectionObserverEntry[]) => void;

interface Props {
  callback: Callback;
  ref: MutableRefObject<any>;
  dependency?: DependencyList;
}

export const useIntersectionCallback = ({ callback, ref, dependency = [] }: Props) => {
  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      callback, {
        root: null,
        threshold: 1.0,
      },
    );
    ref.current && observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [...dependency]);
};
