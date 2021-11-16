import {
  DependencyList, useLayoutEffect, useRef,
} from 'react';

type Callback = (entries: IntersectionObserverEntry[]) => void;

export interface Props {
  callback: Callback;
  dependency?: DependencyList;
}

export const useIntersectionCallback = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { callback, dependency = [] } = props;

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
  }, [...dependency, ref.current]);

  return ref;
};
