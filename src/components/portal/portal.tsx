import {
  ReactChild, ReactPortal, useEffect, useMemo,
} from 'react';
import { createPortal } from 'react-dom';

interface Props {
  rootElementId?: string,
  displayContent: boolean,
  children: ReactChild,
}

export const Portal = ({ rootElementId = '', displayContent, children }: Props): ReactPortal | null => {
  const element = useMemo(() => document.createElement('div'), [rootElementId]);
  const portal = useMemo(() => createPortal(children, element), [element, children]);
  useEffect(() => {
    const rootElementById = document.getElementById(rootElementId);
    if (rootElementById) {
      rootElementById.appendChild(element);
    }
    return () => {
      if (rootElementById) {
        rootElementById.removeChild(element);
      }
    };
  }, [rootElementId]);

  return displayContent ? portal : null;
};
