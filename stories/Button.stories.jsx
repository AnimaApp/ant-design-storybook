import { Button, Space } from 'antd';
import withIconMapped from "../decorators/withIconMapped";
import {iconOptions, iconTransform} from "../utils";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    text: { type: "string" },
    type: {
      control: {
        type: "select",
        options: ["default", "primary", "dashed", "text", "link", "ghost"]
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "default", "large"]
      },
    },
    shape: {
      control: {
        type: "select",
        options: ["default", "circle", "round"]
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
    loading: { type: "boolean" },
    ghost: { type: "boolean" },
    block: { type: "boolean" },
    disabled: { type: "boolean" },
    danger: { type: "boolean" },
  },
  decorators: [withIconMapped],
};

export const Default = (args) => {
  return(
    <Button {...args} icon={args.iconName}>{args.text}</Button>
  );
};

Default.args = {
  text: "Button",
  type: "default",
  size: "default",
  shape: "default",
  iconName: "none",
  loading: false,
  ghost: false,
  block: false,
  disabled: false,
  danger: false,
};