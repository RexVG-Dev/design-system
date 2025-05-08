import { Button, VARIANT, SIZE } from '@components/Button';
import type { ModalFooterProps } from '../Modal.types';

import styles from './ModalFooter.module.scss';

export const ModalFooter = ({ primary, secondary, link }: ModalFooterProps) => {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        {link && (
          <Button
            variant={VARIANT.link}
            size={SIZE.medium}
            ariaLabel={link.ariaLabel}
            onClick={link.onClick}
          >
            {link.text}
          </Button>
        )}
      </div>
      <div className={styles.right}>
        {secondary && (
          <Button
            variant={VARIANT.secondary}
            size={SIZE.medium}
            ariaLabel={secondary.ariaLabel}
            onClick={secondary.onClick}
          >
            {secondary.text}
          </Button>
        )}
        {primary && (
          <Button
            variant={VARIANT.primary}
            size={SIZE.medium}
            ariaLabel={primary.ariaLabel}
            onClick={primary.onClick}
          >
            {primary.text}
          </Button>
        )}
      </div>
    </div>
  );
};