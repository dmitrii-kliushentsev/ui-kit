import React, { FC } from 'react';
import tw, { styled } from 'twin.macro';
import { Icons } from '../icon/index';

type AlertType = 'info' | 'success' | 'warning' | 'error';

interface ContentAlertProps {
  message: string;
  type: AlertType;
}

export const ContentAlert: FC<ContentAlertProps> = ({ message, type }) => (
  <Body type={type} tw="flex gap-x-3 px-4 py-2">
    <div tw="mt-1">
      {getIcon(type)}
    </div>
    <Message>
      {message}
    </Message>
  </Body>
);

const Body = styled.div<{type: AlertType}>`
  ${tw`rounded-lg overflow-hidden border`};

  ${({ type }) => [
    type === 'info' && tw`border-blue-primary`,
    type === 'success' && tw`border-green-success`,
    type === 'warning' && tw`border-orange-warning`,
    type === 'error' && tw`border-red-medium-tint`,
  ]}
`;

const Message = styled.div`
  ${tw`text-14 leading-24`}
`;

function getIcon(type: AlertType) {
  switch (type) {
    case 'error': return <div tw="text-red-medium-tint"><Icons.ErrorFilled /></div>;
    case 'info': return <div tw="text-blue-primary"><Icons.InfoFilled /></div>;
    case 'success': return <div tw="text-green-success"><Icons.SuccessFilled /></div>;
    case 'warning': return <div tw="text-orange-warning"><Icons.WarningFilled /></div>;
    default: return null;
  }
}
