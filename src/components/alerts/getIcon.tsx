import React from 'react';
import { Icons } from '../../drill4j-ui-kit';
import { AlertType } from '../../types/alert';

export const getIcon = (type: AlertType): JSX.Element | null => {



  switch (type) {
    case 'ERROR': return <Icons.ErrorFilled />;
    case 'INFO': return <Icons.InfoFilled />;
    case 'SUCCESS': return <Icons.SuccessFilled />;
    case 'WARNING': return <Icons.WarningFilled />;
    default: return null;
  }
};
