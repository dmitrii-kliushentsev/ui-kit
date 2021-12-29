import React from 'react';

interface Props {
  info: string,
}

export const AdditionalInfo = ({ info }: Props) => (
  <div
    tw="text-ellipsis mt-1 h-5 leading-20 text-12 font-regular text-monochrome-default"
    data-test="compound-cell:additional-info"
    title={info}
  >
    {info}
  </div>
);
