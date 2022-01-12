import React, {
  createContext, FC, useContext, useState,
} from 'react';
import tw, { styled } from 'twin.macro';
import { Icons } from '../icon';
import { Portal } from '../portal';

type State = {isOpen: boolean; setIsOpen: (value: boolean) => void};
type Children = React.ReactChild | React.ReactChild[] | React.FC<State>;
const defaultState: State = { isOpen: false, setIsOpen: () => {} };

const PopupContext = createContext<State>(defaultState);

interface PanelProps {
  children: Children;
  isDisableFadeClick?: boolean;
}

const Panel = ({
  children,
  isDisableFadeClick,
  ...rest,
}: PanelProps) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <PopupContext.Provider value={{ isOpen, setIsOpen }}>
      <Portal rootElementId="panel" displayContent={isOpen}>
        <div tw="flex w-full h-full justify-center items-center" {...rest}>
          {children}
          <PanelFade onClick={() => !isDisableFadeClick && setIsOpen(false)} data-test="modal:fade" />
        </div>
      </Portal>
    </PopupContext.Provider>
  );
};

const PanelContent: FC = ({
  children,
  ...rest,
}) => {
  const { setIsOpen } = useContext(PopupContext);
  return (
    <div tw="w-97 absolute flex flex-col top-0 right-0 h-full z-[100] bg-monochrome-white shadow-[-4px 0 0 0 #007fff, -20px 0 40px 0 rgba(15, 36, 52, 0.15)]" {...rest}>
      <CloseButtonPanel onClick={() => setIsOpen(false)} data-test="modal:close-button" />
      {children}
    </div>
  );
};

interface PanelCloseButtonProps {
  onClick: () => void;
  'data-test': string;
}

const CloseButtonPanel:FC<PanelCloseButtonProps> = (rest) => (
  <div tw="cursor-pointer absolute -left-12 flex items-center justify-center h-12 w-12 rounded-tl-3xl rounded-bl-3xl bg-blue-default text-monochrome-white" {...rest}>
    <Icons.Close />
  </div>
);

const PanelHeader: FC = ({ children }) => (
  <div tw="px-6 py-4 border-b border-monochrome-medium-tint">
    {children}
  </div>
)

const PanelFooter: FC = ({ children }) => (
  <div tw="px-6 py-4 bg-monochrome-light-tint">
    {children}
  </div>
)

const PanelBody: FC = ({ children }) => (
  <div tw="px-6 flex-grow">
    {children}
  </div>
)

const PanelFade = styled.div`
  ${tw`absolute w-full h-full top-0 left-0 bg-monochrome-white`};
  opacity: 0.75;
  z-index: 90;
`;

Panel.Content = PanelContent;
Panel.Header = PanelHeader;
Panel.Footer = PanelFooter;
Panel.Body = PanelBody;

export { Panel };
