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
  const element = useMemo(() => document.createElement('div'), []);
  useEffect(() => {
    const rootElementById = document.getElementById(rootElementId) || createAndAppendElementWithId(rootElementId);
    if (rootElementById) {
      rootElementById.appendChild(element);
    }
    return () => element.remove();
  }, [rootElementId]);
  return displayContent ? createPortal(children, element) : null;
};

function createAndAppendElementWithId(id: string): HTMLDivElement {
  const element = document.createElement('div');
  element.id = id;
  document.body.appendChild(element);
  return element;
}
