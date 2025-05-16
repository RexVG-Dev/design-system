import { useEffect, useRef } from 'react';
import { FocusTrap } from 'focus-trap-react';

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

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen])

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={handleOverlayClick}
    >
      <FocusTrap
        active={isOpen}
        focusTrapOptions={{
          initialFocus: () => modalRef.current,
          escapeDeactivates: false,
          clickOutsideDeactivates: false,
        }
        }
      >
        <div
          className={styles.modal}
          ref={modalRef}
          role='dialog'
          aria-modal="true"
          aria-label={ariaLabel}
        >
          <div
            className={styles.header}
            tabIndex={0}
          >
            <h2 id="modal-title">{title}</h2>
            <button
              aria-label="Close modal"
              className={styles.closeButton}
              onClick={onClose}
            >
              &times;
            </button>
          </div>

          <div
            tabIndex={0}
            className={styles.content}
            id="modal-description">
            {children}
          </div>

          {footer && <ModalFooter {...footer} />}
        </div>
      </FocusTrap>
    </div>
  );
};
