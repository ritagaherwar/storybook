import type { Meta, StoryObj } from '@storybook/vue3';
import { userEvent, within, expect } from '@storybook/test';
import RaniumButton from './RaniumButton.vue';

const meta: Meta<typeof RaniumButton> = {
  component: RaniumButton,
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    variant: { control: 'radio', options: ['primary', 'secondary', 'danger'] },
  },
};

export default meta;

type Story = StoryObj<typeof RaniumButton>;

// Default Button
export const Default: Story = {
  args: {
    label: 'Click me',
    disabled: false,
    variant: 'primary',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText('Click me');
    await userEvent.click(button);

    // You can check the behavior here (e.g., if the alert is called)
    expect(button).toBeInTheDocument();
  },
};

// Disabled Button
export const Disabled: Story = {
  args: {
    label: "Can't click me",
    disabled: true,
    variant: 'primary',
  },
};

// Button with 'Primary' variant
export const Primary: Story = {
  args: {
    label: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
};

// Button with 'Secondary' variant
export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
};

// Button with 'Danger' variant
export const Danger: Story = {
  args: {
    label: 'Danger Button',
    disabled: false,
    variant: 'danger',
  },
};

// Button Click Test
export const ButtonClickTest: Story = {
  args: {
    label: 'Click me',
    disabled: false,
    variant: 'primary',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText('Click me');
    await userEvent.click(button);

    // You can check the behavior here (e.g., if the alert is called)
    expect(button).toBeInTheDocument();
  },
};
