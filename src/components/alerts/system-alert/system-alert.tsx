import React, {
  ReactChildren, ReactElement, ReactNode,
} from 'react';
import tw, { styled } from 'twin.macro';
import { Icons } from '../../icon/index';
import { AlertType } from '../../../types/alert';
import { getIcon } from '../getIcon';

interface SystemAlertProps {
  title: string;
  type: AlertType;
<<<<<<< HEAD
  onClose: () => void;
=======
>>>>>>> 04ff84b (refactor: content and system alerts)
  children?: ReactChildren | ReactNode;
  action?: ReactElement;
}

export const SystemAlert = ({
<<<<<<< HEAD
  title, type, action, children, onClose,
=======
  title, type, action, children,
>>>>>>> 04ff84b (refactor: content and system alerts)
}: SystemAlertProps) => (
  <Content type={type} tw="w-[600px] flex gap-x-2 py-1 px-4">
    <div tw="mt-2">
      {getIcon(type)}
    </div>
    {/* HACK: use min-width use min-width so that the text does not stretch outside the block
        Link: https://css-tricks.com/flexbox-truncated-text/ */}
    <div tw="flex flex-col flex-grow py-1 min-w-8px">
      <span tw="text-16 leading-24 font-bold truncate">{title}</span>
      <div tw="text-14 leading-20">{children}</div>
    </div>
    {action}
<<<<<<< HEAD
    <CloseButton tw="flex justify-center items-center w-6 h-6 mt-1" onClick={onClose}>
=======
    <CloseButton tw="flex justify-center items-center w-6 h-6 mt-1">
>>>>>>> 04ff84b (refactor: content and system alerts)
      <Icons.Close width={12} height={12} />
    </CloseButton>
  </Content>
);

interface ContentProps {
  type: AlertType;
}

const Content = styled.div<ContentProps>`
  ${tw`rounded-lg text-monochrome-white overflow-hidden`};

  ${({ type }) => [
<<<<<<< HEAD
    type === 'INFO' && tw`bg-blue-primary`,
    type === 'SUCCESS' && tw`bg-green-success`,
    type === 'WARNING' && tw`bg-orange-warning`,
    type === 'ERROR' && tw`bg-red-medium-tint`,
=======
    type === 'info' && tw`bg-blue-primary`,
    type === 'success' && tw`bg-green-success`,
    type === 'warning' && tw`bg-orange-warning`,
    type === 'error' && tw`bg-red-medium-tint`,
>>>>>>> 04ff84b (refactor: content and system alerts)
  ]}
`;

const Action = styled.div`
  ${tw`self-start mt-1 px-2`}
  ${tw`text-16 leading-24 text-monochrome-white uppercase font-bold rounded-2xl cursor-pointer
  hover:bg-[rgba(256, 256, 256, 0.1)] active:(text-monochrome-dark-tint bg-transparent) disabled:opacity-40`}
`;

const CloseButton = styled.div`
  ${tw`rounded-full hover:bg-[rgba(256, 256, 256, 0.1)] active:(text-monochrome-dark-tint bg-transparent) 
  disabled:opacity-40  cursor-pointer`}
`;

SystemAlert.Action = Action;
