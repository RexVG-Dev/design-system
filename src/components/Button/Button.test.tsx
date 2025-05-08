import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { VARIANT, SIZE } from './Button.types';

describe('Button', () => {
  const ariaLabel = 'button test';
  const variants = Object.values(VARIANT);
  const sizes = Object.values(SIZE);

  it('should renders with text content', () => {
    render(<Button ariaLabel={ariaLabel}>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  test.each(variants)(
    'should have the correct class for variant %s',
    (variant) => {
      render(
        <Button
          ariaLabel={ariaLabel}
          variant={variant}
        >
          Click me
        </Button>
      )

      const button = screen.getByRole('button');
      expect(button.className).toContain(`button--${variant}`);
    }
  );

  test.each(sizes)(
    'should have the correct class for size %s',
    (size) => {
      render(
        <Button
          ariaLabel={ariaLabel}
          size={size}
        >
          Click me
        </Button>
      )

      const button = screen.getByRole('button');
      expect(button.className).toContain(`button--${size}`);
    }
  );
});
