# Design System - Button & Modal Components

This is a simple design system that includes reusable components for a Button and a Modal built with React. The components are designed with accessibility in mind and are styled using SCSS modules

## Components

### Button
A flexible button component that supports different variants (primary, secondary, link), sizes (small, medium, large, fluent), and accessibility features like aria-label.

Usage:
```
import { Button, VARIANT, SIZE } from '@components/Button';

<Button
  variant={VARIANT.primary}
  size={SIZE.medium}
  ariaLabel="Submit"
  onClick={handleClick}
>
  Submit
</Button>
```
### Modal
A customizable modal component with a header, content area, and optional footer with action buttons. The modal supports accessibility features like aria-labelledby and aria-label, and it handles closing with the Escape key or by clicking the overlay.

Usage:
```
import { Modal } from '@components/Modal';

<Modal
  isOpen={isModalOpen}
  onClose={handleCloseModal}
  ariaLabel="Modal to confirm action"
  title="Confirm Action"
  footer={{
    primary: {
      text: 'Confirm',
      ariaLabel: 'Confirm action',
      onClick: handleConfirm,
    },
    secondary: {
      text: 'Cancel',
      ariaLabel: 'Cancel action',
      onClick: handleCancel,
    },
  }}
>
  <p>Are you sure you want to perform this action?</p>
</Modal>

```

## Features
  - **Accessibility:** The components are designed with accessibility in mind. Proper aria-label, aria-modal, and role attributes are set for keyboard navigation and screen reader users.
  - **Customization:** Easily customize the buttons with variants and sizes, and modals with optional footer actions.
  - **Responsiveness:** The components adapt to different screen sizes and are styled using SCSS modules with CSS variables for easy theming.

## Installation
 - Clone the repository:
```
git clone https://github.com/RexVG-Dev/design-system.git
cd design-system
```

- Install dependencies:
```
npm install
```

To run the development environment:
```
npm start
```

To run tests:
```
npm test
```
