import { ClockCircleOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space } from 'antd';

export default {
  title: "Badge",
  component: Badge,
  argTypes: {
    count: { type: "number" },
    overflowCount: { type: "number" },
    color: { control: {type: "color"}},
    status: {
      control: {
        type: "select",
        options: ["default", "success", "processing", "error", "warning"]
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "default"]
      },
    },
    dot: { type: "boolean" },
    offset: {
      control: {
        type: "story",
      }
    },
    text: { type: "string" },
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