import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import { Modal } from './Modal';
import { Button } from '../Button';
import type { ModalProps, ModalFooterProps } from './Modal.types';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    title: { control: 'text' },
    children: { control: 'text' },
    isOpen: { control: 'boolean' },
    footer: { control: 'object' },
  },
};

export default meta;

const Template: StoryFn<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen ?? false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button onClick={handleOpen} ariaLabel="Open modal">Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={handleClose}>
        {args.children}
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Default Modal',
  isOpen: false,
  children: 'This is a simple modal',
};

export const WithFooter = Template.bind({});
WithFooter.args = {
  title: 'Modal with Footer',
  isOpen: false,
  children: 'This modal includes footer actions.',
  footer: {
    primary: {
      text: 'Confirm',
      ariaLabel: 'Confirm',
      onClick: () => alert('Confirmed'),
    },
    secondary: {
      text: 'Cancel',
      ariaLabel: 'Cancel',
      onClick: () => alert('Cancelled'),
    },
    link: {
      text: 'Learn more',
      ariaLabel: 'Learn more',
      onClick: () => alert('Learn more clicked'),
    },
  } as ModalFooterProps,
};

export const WithLongContent = Template.bind({});
WithLongContent.args = {
  title: 'Modal with Long Content',
  isOpen: false,
  children: (
    <>
      {Array.from({ length: 50 }, (_, i) => (
        <p key={i}>This is line {i + 1} of the modal content.</p>
      ))}
    </>
  ),
};
