import {
  DependencyList, useLayoutEffect, useRef, useState,
} from 'react';

export const useIntersectionSide = ({ dependency = [] }: {dependency?: DependencyList}) => {
  const [intersectionSide, setIntersectionSide] = useState<Sides>(null);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    setIntersectionSide(null);

    const observer = new IntersectionObserver(
      () => setIntersectionSide((current) => getIntersectionSide(current, ref?.current?.getBoundingClientRect())), {
        root: null,
        threshold: 1.0,
      },
    );
    ref.current && observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [...dependency]);

  return { ref, intersectionSide };
};

type Sides = 'right' |'left' | 'top' | 'bottom' | null;

function getIntersectionSide(current: Sides, react?: DOMRect): Sides {
  const {
    left = 0, top = 0, width = 0, height = 0,
  } = react || {};

  if (left + width > document.documentElement.clientWidth) {
    return 'right';
  }

  if (left < 0) {
    return 'left';
  }

  if (top + height > document.documentElement.clientHeight) {
    return 'bottom';
  }

  if (top < 0) {
    return 'top';
  }
  return current;
}
