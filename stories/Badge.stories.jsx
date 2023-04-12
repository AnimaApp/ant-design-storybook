import { Avatar, Badge } from 'antd';

export default {
  title: "Badge",
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: "Badge",
      },
    },
  },
  argTypes: {
    count: { description: "Count",  type: "number" },
    overflowCount: { description: "Overflow Count",  type: "number" },
    color: {
      description: "Color",
      control: { type: "color" }},
    status: {
      description: "Status",
      control: {
        type: "select",
        options: ["default", "success", "processing", "error", "warning"]
      },
    },
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["small", "default"]
      },
    },
    dot: { description: "Dto",  type: "boolean" },
    offset: {
      description: "Offset",
      control: {
        type: "story",
      }
    },
    text: { description: "Text", type: "string" },
  }
};

export const Default = (args) => {
  return (
    <Badge {...args} offset={Object.values(args.offset)}>
      <Avatar shape="square" size="large" />
    </Badge>
  );
};

Default.args = {
  count: 8,
  overflowCount: 7,
  dot: false,
  status: "default",
  size: "default",
  offset: {
    horizontal: 0,
    vertical: 0,
  },
  text: "",
}