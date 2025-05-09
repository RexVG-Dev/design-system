import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { VARIANT, SIZE, type ButtonProps} from './Button.types';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(VARIANT),
      defaultValue: VARIANT.primary,
      description: 'Button variant',
    },
    size: {
      control: 'select',
      options: Object.values(SIZE),
      defaultValue: SIZE.medium,
      description: 'Button size',
    },
    ariaLabel: {
      control: 'text',
      defaultValue: 'Button',
      description: 'Button aria-label',
    },
    children: {
      control: 'text',
      defaultValue: 'Button',
      description: 'Button text',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: 'Disable button',
    }
  },
};

type Story = StoryObj<ButtonProps>;

export const PlayGround: Story = {
  args: {
    variant: VARIANT.primary,
    size: SIZE.medium,
    ariaLabel: 'Button',
    children: 'Button',
    disabled: false,
  },
}

export default meta;
