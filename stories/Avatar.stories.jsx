import { Avatar } from 'antd';
import {iconOptions, iconTransform} from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Avatar",
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: "Avatar",
      },
    },
  },
  argTypes: {
    size: { description: "Size", type: "number" },
    src: { description: "Src", type: "string" },
    text: { description: "Text", type: "string" },
    backgroundColor: {
      description: "Color",
      control: { type: "color" }},
    shape: {
      description: "Shape",
      control: {
        type: "select",
        options: ["circle", "square"]
      },
    },
    iconName: {
      description: "Icon",
      control: {
        type: "select",
        options: iconOptions,
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