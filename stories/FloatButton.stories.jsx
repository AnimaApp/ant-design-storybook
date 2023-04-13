import { FloatButton } from "antd";
import withIconMapped from "../decorators/withIconMapped";
import {iconOptions, iconTransform} from "../utils";
import {useEffect, useState} from "react";


export default {
  title: "FloatButton",
  component: FloatButton,
  parameters: {
    docs: {
      description: {
        component: "FloatButton",
      },
    },
  },
  argTypes: {
    description: { description: "Description", type: "string" },
    shape: {
      description: "Shape",
      control: {
        type: "select",
        options: ["circle", "square"]
      }
    },
    type: {
      description: "Type",
      control: {
        type: "select",
        options: ["default", "primary"]
      }
    },
    trigger: {
      description: "Trigger",
      control: {
        type: "select",
        options: ["click", "hover"]
      }
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
    open: { description: "Open", type: "boolean" },
    badge: { description: "Badge", type: "story" },
  },
  decorators: [withIconMapped],
};

const badge = {
  count: 5,
  color: "blue",
}

export const Default = (args) => {
  const [open, setOpen] = useState(args.open);

  useEffect(() => {
    setOpen(args.open);
  }, [args.open])

  return (
    <FloatButton.Group
      {...args}
      icon={args.iconName}
      badge={args.badge}
      open={open}
      onOpenChange={() => setOpen(!open)}
    >
      <FloatButton/>
      <FloatButton/>
    </FloatButton.Group>
  );
};

Default.args = {
  description: "desc",
  shape: "circle",
  type: "default",
  trigger: "hover",
  iconName: "None",
  open: true,
  badge: badge,
};