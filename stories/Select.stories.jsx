import { Select } from 'antd';

export default {
  title: "Select",
  component: Select,
  parameters: {
    docs: {
      description: {
        component: "Select",
      },
    },
  },
  argTypes: {
    width: { description: "Width", type: "number" },
    disabled: { description: "Disabled", type: "boolean" },
    loading: { description: "Loading", type: "boolean" },
    allowClear: { description: "Allow Clear", type: "boolean" },
    items: { description: "Items", type: "story" },
    mode: {
      description: "Size",
      control: {
        type: "select",
        options: ["multiple", "tags", "default"]
      }
    },
    placement: {
      description: "Placement",
      control: {
        type: "select",
        options: ["bottomLeft", "bottomRight", "topLeft", "topRight"]
      },
    },
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["large", "middle", "small"]
      }
    },
  }
};

const options = [
  {
    value: 'jack',
    label: 'Jack',
  },
  {
    value: 'lucy',
    label: 'Lucy',
  },
  {
    value: 'Yiminghe',
    label: 'yiminghe',
  },
  {
    value: 'disabled',
    label: 'Disabled',
    disabled: true,
  },
];

export const Default = (args) => {
  return (
    <Select
      {...args}
      options={args.items}
      style={{width: args.width}}
    />
  );
};

Default.args = {
  width: 200,
  allowClear: false,
  loading: false,
  disabled: false,
  mode: "default",
  placement: "bottomRight",
  items: options,
};