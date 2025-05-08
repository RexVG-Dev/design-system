import { useEffect, useRef } from 'react';
import { type ModalProps } from './Modal.types';
import { ModalFooter } from './ModalFooter/ModalFooter';

import styles from './Modal.module.scss';

export const Modal = ({
  isOpen,
  onClose,
  ariaLabel,
  title,
  children,
  footer,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeydown);
    } else {
      window.removeEventListener('keydown', handleKeydown);
    }

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-label={ariaLabel}
      onClick={handleOverlayClick}
    >
      <div className={styles.modal} ref={modalRef}>
        <div className={styles.header}>
          <h2 id="modal-title">{title}</h2>
          <button
            aria-label="Close modal"
            className={styles.closeButton}
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <div className={styles.content}>
          {children}
        </div>

        {footer && <ModalFooter {...footer} />}
      </div>
    </div>
  );
};
