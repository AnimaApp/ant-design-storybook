import { Dropdown, Space } from 'antd';
import withIconMapped from "../decorators/withIconMapped";
import {iconOptions, iconTransform} from "../utils";
// import {dropItems} from "./Dropdown.stories";

export default {
  title: "DropdownButton",
  component: Dropdown.Button,
  argTypes: {
    text: { type: "string" },
    loading: { type: "boolean" },
    danger: { type: "boolean" },
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

const items = [
  {
    key: '1',
    label: "1rd menu item",
  },
  {
    key: '2',
    label: "2rd menu item",
  },
  {
    key: '3',
    label: "3rd menu item",
  },
];

export const Default = (args) => {
  return (
    <Dropdown.Button menu={{items,}} {...args} icon={args.iconName}>{args.text}</Dropdown.Button>
  );
};

Default.args = {
  text: "Submit",
  type: "primary",
  size: "primary",
  danger: false,
  loading: false,
}