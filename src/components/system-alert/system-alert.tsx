import React, {
  ReactChildren, ReactElement, ReactNode,
} from 'react';
import tw, { styled } from 'twin.macro';
import { Icons } from '../../drill4j-ui-kit';

type AlertType = 'info' | 'success' | 'warning' | 'error';

interface SystemAlertProps {
  title: string;
  type: AlertType;
  children?: ReactChildren | ReactNode;
  action?: ReactElement;
}

export const SystemAlert = ({
  title, type, action, children,
}: SystemAlertProps) => (
  <Content type={type}>
    <div tw="mt-2">
      {getIconFromType(type)}
    </div>
    <div tw="flex flex-col flex-grow py-1 min-w-8px">
      <span tw="text-16 leading-24 font-bold truncate">{title}</span>
      <div tw="text-14 leading-20">{children}</div>
    </div>
    {action}
    <CloseButton tw="flex justify-center items-center w-6 h-6 mt-1 cursor-pointer">
      <Icons.Close width={12} height={12} />
    </CloseButton>
  </Content>
);

interface ContentProps {
  type: AlertType;
}

const Content = styled.div<ContentProps>`
  ${tw`w-[600px] flex gap-x-2 py-1 px-4 rounded-lg text-monochrome-white overflow-hidden`};

  ${({ type }) => [
    type === 'info' && tw`bg-blue-primary`,
    type === 'success' && tw`bg-green-success`,
    type === 'warning' && tw`bg-orange-warning`,
    type === 'error' && tw`bg-red-medium-tint`,
  ]}
`;

const Action = styled.div`
  ${tw`self-start mt-1 px-2 text-16 leading-24 text-monochrome-white uppercase font-bold rounded-2xl cursor-pointer
  hover:bg-[rgba(256, 256, 256, 0.1)] active:(text-monochrome-dark-tint bg-transparent) disabled:opacity-40`}
`;

const CloseButton = styled.div`
  ${tw`rounded-full hover:bg-[rgba(256, 256, 256, 0.1)] active:text-monochrome-dark-tint active:bg-transparent disabled:opacity-40`}
`;

function getIconFromType(type: AlertType) {
  switch (type) {
    case 'error': return <Icons.ErrorFilled />;
    case 'info': return <Icons.InfoFilled />;
    case 'success': return <Icons.SuccessFilled />;
    case 'warning': return <Icons.WarningFilled />;
    default: return null;
  }
}

SystemAlert.Action = Action;
