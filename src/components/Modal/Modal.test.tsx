import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from './Modal';

jest.mock('@components/Button', () => ({
  Button: ({ children }: { children: React.ReactNode }) => <button>{children}</button>,
  VARIANT: {
    primary: 'primary',
    secondary: 'secondary',
    link: 'link',
  },
  SIZE: {
    small: 'small',
    medium: 'medium',
    large: 'large',
    fluent: 'fluent',
  },
}));

describe('Modal', () => {
  const defaultProps = {
    isOpen: true,
    onClose: jest.fn(),
    ariaLabel: 'Test Modal',
    title: 'Modal Title',
    children: <p>Modal content</p>,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should not render when isOpen is false', () => {
    render(<Modal {...defaultProps} isOpen={false} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should render title and content when open', () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Modal Title')).toBeInTheDocument();
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('should call onClose when clicking the overlay', () => {
    render(<Modal {...defaultProps} />);
    const overlay = screen.getByRole('dialog');

    fireEvent.mouseDown(overlay);
    fireEvent.click(overlay);

    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it('should call onClose when clicking the close button', () => {
    render(<Modal {...defaultProps} />);
    const closeButton = screen.getByLabelText('Close modal');
    fireEvent.click(closeButton);
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it('should call onClose when pressing Escape key', () => {
    render(<Modal {...defaultProps} />);
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it('should render footer if provided', () => {
    const footer = {
      primary: {
        text: 'Confirm',
        ariaLabel: 'Confirm',
        onClick: jest.fn(),
      },
    };

    render(<Modal {...defaultProps} footer={footer} />);
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument();
  });
});
