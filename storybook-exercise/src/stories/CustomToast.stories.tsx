import type { Meta, StoryObj } from '@storybook/react-vite';

import CustomToast from './CustomToast';

const meta = {
  component: CustomToast,
  parameters:{
    layout:"centered"
  },
  tags: ['autodocs'],
  args:{
    state:"success",
    text: "text",
    hasIcon:true
  }
} satisfies Meta<typeof CustomToast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

export const NoIcon:Story={
  args:{
    hasIcon:false
  }
}
export const Success:Story={
  args:{
    state:"success",
    text:"Success!!"
  }
}

export const Warning:Story={
  args:{
    state:"warning",
    text:"Warning"
  }
}

export const Error:Story={
  args:{
    state:"error",
    text:"Error Occurs"
  }
}