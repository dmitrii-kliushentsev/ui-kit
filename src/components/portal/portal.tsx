import {
  ReactChild, ReactPortal,
} from 'react';
import { createPortal } from 'react-dom';

interface Props {
  rootElementId?: string,
  displayContent: boolean,
  children: ReactChild,
}

export const Portal = ({ rootElementId = '', displayContent, children }: Props): ReactPortal | null => {
  const rootElementById = document.getElementById(rootElementId) || createAndAppendElement(rootElementId);
  return displayContent ? createPortal(children, rootElementById) : null;
};

function createAndAppendElement(id: string): HTMLDivElement {
  const element = document.createElement('div');
  element.id = id;
  document.body.appendChild(element);
  return element;
}
