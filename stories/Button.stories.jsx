import { Button } from 'antd';
import withIconMapped from "../decorators/withIconMapped";
import {iconOptions, iconTransform} from "../utils";

export default {
  title: "Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "Button",
      },
    },
  },
  argTypes: {
    text: { description: "Text", type: "string" },
    type: {
      description: "Type",
      control: {
        type: "select",
        options: ["default", "primary", "dashed", "text", "link", "ghost"]
      },
    },
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["small", "default", "large"]
      },
    },
    shape: {
      description: "Shape",
      control: {
        type: "select",
        options: ["default", "circle", "round"]
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
    loading: { description: "Loading",  type: "boolean" },
    ghost: { description: "Ghost", type: "boolean" },
    block: { description: "Block", type: "boolean" },
    disabled: { description: "Disabled", type: "boolean" },
    danger: { description: "Danger", type: "boolean" },
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