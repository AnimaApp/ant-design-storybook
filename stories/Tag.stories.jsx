import { Tag, Space } from 'antd';
import withIconMapped from "../decorators/withIconMapped";
import {iconOptions, iconTransform} from "../utils";

export default {
  title: "Tag",
  component: Tag,
  parameters: {
    docs: {
      description: {
        component: "Tag",
      },
    },
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    href: { description: "Href", type: "string" },
    size: { description: "Size", type: "number" },
    closable: { description: "Closable", type: "boolean" },
    bordered: { description: "Bordered", type: "boolean" },
    status: {
      description: "Status",
      control: {
        type: "select",
        options: ["none", "success", "processing", "error", "warning", "default"]
      }
    },
    color: {
      description: "Color",
      control: { type: "color", }
    },
    iconName: {
      description: "Icon",
      control: {
        type: "select",
        options: iconOptions,
        transform: iconTransform,
      },
    },
  },
  decorators: [withIconMapped],
};

export const Default = (args) => {
  return (
    <Tag
      {...args}
      icon={args.iconName}
      color={
        args.status === "none"? args.color : args.status
      }
    >
      { args.href
        ? <a href={args.label}>{args.label}</a>
        : <span>{args.label}</span>
      }
    </Tag>
  );
};

Default.args = {
  label: "Tag",
  size: 8,
  href: "https://github.com/ant-design/ant-design/issues/1862",
  status: "none",
  color: "default",
  iconName: "None",
  closable: true,
  bordered: false,
};