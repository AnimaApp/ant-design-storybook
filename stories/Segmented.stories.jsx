import { Segmented } from 'antd'

export default {
  title: "Segmented",
  component: Segmented,
  parameters: {
    docs: {
      description: {
        component: "Segmented",
      },
    },
  },
  argTypes: {
    options: { description: "Options", type: "story"},
    block: { description: "Block", type: "boolean"},
    disabled: { description: "Block", type: "boolean"},
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["large", "middle", "small"],
      }
    },
  }
};

const options = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'];

export const Default = (args) => {
  return (
    <Segmented {...args} />
  );
};

Default.args = {
  size: "middle",
  block: false,
  disabled: false,
  options: options,
};