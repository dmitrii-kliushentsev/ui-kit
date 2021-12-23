import React, {
  createContext, useContext, useState,
} from 'react';
import tw, { styled, css } from 'twin.macro';

import { Portal } from '../portal';
import { Icons } from '../icon';

type State = {isOpen: boolean; setIsOpen: (value: boolean) => void};
type Children = React.ReactChild | React.ReactChild[] | React.FC<State>;
const defaultState: State = { isOpen: false, setIsOpen: () => {} };

const PopupContext = createContext<State>(defaultState);

export const Popup = ({ children }: {children: Children}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <PopupContext.Provider value={{ isOpen, setIsOpen }}>
      {typeof children === 'function' ? children({ setIsOpen, isOpen }) : children}
    </PopupContext.Provider>
  );
};

export interface PanelProps {
  type?: 'info' | 'error';
  closeOnFadeClick?: boolean;
}

const Panel: React.FC<PanelProps> = ({
  children, type, closeOnFadeClick, ...rest
}) => {
  const { isOpen, setIsOpen } = useContext(PopupContext);

  return (
    <Portal rootElementId="modal" displayContent={isOpen}>
      <Content type={type} {...rest}>{children}</Content>
      <Fade onClick={() => closeOnFadeClick && setIsOpen(false)} data-test="popup:fade" />
    </Portal>
  );
};

const Content = styled.div<PanelProps>`
  ${tw`absolute top-1/2 left-1/2 z-[100] bg-monochrome-white`}
  ${tw`-translate-x-1/2 -translate-y-1/2`}
  
  ${({ type }) => [
    type === 'info' && css`box-shadow: 0 -4px 0 0 #007fff, 0 0 24px 0 rgba(0, 0, 0, 0.15)`,
    type === 'error' && css`box-shadow: 0 -4px 0 0 #ee0000, 0 0 24px 0 rgba(0, 0, 0, 0.15)`,
  ]}
`;

const Fade = styled.div`
  ${tw`absolute w-full h-full top-0 left-0 bg-monochrome-black z-[90] opacity-40`};
`;

const Header: React.FC = ({ children, ...rest }) => {
  const { setIsOpen } = useContext(PopupContext);
  return (
    <div
      tw="
        flex justify-between items-center min-h[64px] px-6 py-4
        border-b border-monochrome-medium-tint
        text-20 leading-32 text-monochrome-black"
      {...rest}
    >
      {children}
      <Icons.Close tw="cursor-pointer" onClick={() => setIsOpen(false)} data-test="popup:close-button" />
    </div>
  );
};

const Footer = styled.div`
  ${tw`pt-9 px-6 pb-6`}
`;

Popup.Footer = Footer;
Popup.Header = Header;
Popup.Panel = Panel;
