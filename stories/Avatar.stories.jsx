import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import {iconOptions, iconTransform} from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Avatar",
  component: Avatar,
  argTypes: {
    size: { type: "number" },
    src: { type: "string" },
    text: { type: "string" },
    backgroundColor: { control: {type: "color"}},
    shape: {
      control: {
        type: "select",
        options: ["circle", "square"]
      },
    },
    iconName: {
      control: {
        type: "select",
        options: iconOptions,
        description: "Icon",
        transform: iconTransform,
        required: false,
      },
    },
  },
  decorators: [withIconMapped],
};

export const Default = (args) => {
  return (
    <Avatar
      style={{backgroundColor: args.backgroundColor}}
      {...args}
      icon={args.iconName}
    >
      {args.text}
    </Avatar>
  );
};

Default.args = {
  size: 64,
  src: "src",
  text: "User",
  shape: "circle",
  iconName: "UserOutlined",
}