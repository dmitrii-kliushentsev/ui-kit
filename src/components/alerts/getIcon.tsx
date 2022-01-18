import React from 'react';
import { Icons } from '../../drill4j-ui-kit';
import { AlertType } from '../../types/alert';

export const getIcon = (type: AlertType): JSX.Element | null => {
  switch (type) {
<<<<<<< HEAD
    case 'ERROR': return <Icons.ErrorFilled />;
    case 'INFO': return <Icons.InfoFilled />;
    case 'SUCCESS': return <Icons.SuccessFilled />;
    case 'WARNING': return <Icons.WarningFilled />;
=======
    case 'error': return <Icons.ErrorFilled />;
    case 'info': return <Icons.InfoFilled />;
    case 'success': return <Icons.SuccessFilled />;
    case 'warning': return <Icons.WarningFilled />;
>>>>>>> 04ff84b (refactor: content and system alerts)
    default: return null;
  }
};
