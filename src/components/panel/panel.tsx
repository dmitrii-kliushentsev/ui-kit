import React, {
  createContext, FC, useContext, useState,
} from 'react';
import tw, { styled } from 'twin.macro';
import { Icons } from '../icon';
import { Portal } from '../portal';

type State = {isOpen: boolean; setIsOpen: (value: boolean) => void};
type Children = React.ReactChild | React.ReactChild[] | React.FC<State> | React.ReactNode;
const defaultState: State = { isOpen: false, setIsOpen: () => {} };

const PanelContext = createContext<State>(defaultState);

interface PanelProps {
  children: Children;
}

const Panel = ({ children }: PanelProps) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <PanelContext.Provider value={{ isOpen, setIsOpen }}>
      {typeof children === 'function' ? children({ setIsOpen, isOpen }) : children}
    </PanelContext.Provider>
  );
};

interface PanelContentProps {
  children: Children;
  isDisableFadeClick?: boolean;
}

const PanelContent: FC<PanelContentProps> = ({
  children,
  isDisableFadeClick,
  ...rest
}) => {
  const { isOpen, setIsOpen } = useContext(PanelContext);
  return (
    <Portal rootElementId="panel" displayContent={isOpen}>
      <div tw="flex w-full h-full justify-center items-center" {...rest}>
        <div tw="w-97 absolute flex flex-col top-0 right-0 h-full z-[100] bg-monochrome-white shadow-[-4px 0 0 0 #007fff, -20px 0 40px 0 rgba(15, 36, 52, 0.15)]">
          <div
            tw="cursor-pointer absolute -left-12 flex items-center justify-center h-12 w-12 rounded-tl-3xl rounded-bl-3xl bg-blue-default text-monochrome-white"
            onClick={() => setIsOpen(false)}
            data-test="panel:close-button"
          >
            <Icons.Close />
          </div>
          {children}
        </div>
        <PanelFade onClick={() => !isDisableFadeClick && setIsOpen(false)} data-test="panel:fade" />
      </div>
    </Portal>
  );
};

const PanelHeader: FC = ({ children }) => (
  <div tw="px-6 py-4 border-b border-monochrome-medium-tint">
    {children}
  </div>
);

const PanelFooter: FC = ({ children }) => (
  <div tw="px-6 py-4 bg-monochrome-light-tint">
    {children}
  </div>
);

const PanelBody: FC = ({ children }) => (
  <div tw="px-6 flex-grow">
    {children}
  </div>
);

const PanelFade = styled.div`
  ${tw`absolute w-full h-full top-0 left-0 bg-monochrome-white opacity-75 z-[90]`};
`;

Panel.Content = PanelContent;
Panel.Header = PanelHeader;
Panel.Footer = PanelFooter;
Panel.Body = PanelBody;

export { Panel };
