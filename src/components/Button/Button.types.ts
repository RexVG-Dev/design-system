import { type ButtonHTMLAttributes, type ReactNode } from 'react';

export const VARIANT = {
  primary: 'primary',
  secondary: 'secondary',
  link: 'link',
} as const;

export type Variant = typeof VARIANT[keyof typeof VARIANT];

export const SIZE = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  fluent: 'fluent',
} as const;

export type Size = typeof SIZE[keyof typeof SIZE];

export type ButtonProps = {
  variant?: Variant;
  size?: Size;
  ariaLabel: string;
  children: ReactNode;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;
