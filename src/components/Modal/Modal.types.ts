import { type ReactNode } from 'react';

export type ModalFooterProps = {
  primary?: ButtonFooterProps;
  secondary?: ButtonFooterProps;
  link?: ButtonFooterProps;
};

type ButtonFooterProps = {
  text: string;
  ariaLabel: string;
  onClick: () => void;
}

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  ariaLabel: string;
  title: string;
  children: ReactNode;
  footer?: ModalFooterProps;
};
