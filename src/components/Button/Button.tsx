import { type ButtonProps, VARIANT, SIZE } from './Button.types';
import styles from './Button.module.scss';

export const Button = ({
  variant = VARIANT.primary,
  size = SIZE.medium,
  ariaLabel,
  children,
  onClick,
  ...props
}: ButtonProps) => {

  const buttonClass = `
    ${styles.button}
    ${styles[`button--${variant}`]}
    ${styles[`button--${size}`]}
  `;
  const ariaProps = { 'aria-label': ariaLabel };
  
  return (
    <button
      className={buttonClass}
      onClick={onClick}
      {...ariaProps}
      {...props}
    >
      {children}
    </button>
  );
};
