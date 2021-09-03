import React from 'react';
import tw, { styled } from 'twin.macro';
import { Icons } from '../icon';
import { Portal } from '../portal';

interface Props {
  children: React.ReactChild;
  onToggle: (isOpen: boolean) => void;
  isOpen: boolean;
  isDisableFadeClick?: boolean;
}

export const Modal = ({
  children, onToggle, isOpen, isDisableFadeClick,
}: Props) => (
  <Portal rootElementId="modal">
    {isOpen && (
      <div tw="flex w-full h-full justify-center items-center">
        <ModalCard>
          <CloseButton tw="cursor-pointer" onClick={() => onToggle(!isOpen)} data-test="modal:close-button">
            <Icons.Close />
          </CloseButton>
          {children}
        </ModalCard>
        <Fade onClick={() => !isDisableFadeClick && onToggle(!isOpen)} data-test="modal:fade" />
      </div>
    )}
  </Portal>
);

const ModalCard = styled.div` 
  width: 400px;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  z-index: 40;
  ${tw`bg-monochrome-white`}
  box-shadow: -4px 0 0 0 #007fff, -20px 0 40px 0 rgba(15, 36, 52, 0.15);
`;

const CloseButton = styled.div`
  ${tw`absolute flex items-center justify-center h-12 w-12 bg-blue-default text-monochrome-white`};
  left: -48px;
  border-radius: 24px 0 0 24px;
`;

const Fade = styled.div`
  ${tw`absolute w-full h-full top-0 left-0 bg-monochrome-white`};
  opacity: 0.75;
  z-index: 39;
`;
