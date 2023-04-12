import { Button, Tooltip } from "antd";
import {useEffect, useState} from "react";

export default {
  title: "Tooltip",
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: "Tooltip",
      },
    },
  },
  argTypes: {
    title: { description: "Title", type: "string" },
    text: { description: "Text", type: "string" },
    open: { description: "Open", type: "boolean" },
    arrow: { description: "Arrow", type: "boolean" },
    color: {
      description: "Color",
      control: { type: "color" }
    },
    placement: {
      description: "Placement",
      control: {
        type: "select",
        options: [
          "top",
          "left",
          "right",
          "bottom",
          "topLeft",
          "topRight",
          "bottomLeft",
          "bottomRight",
          "leftTop",
          "leftBottom",
          "rightTop",
          "rightBottom"
        ]
      }
    },
    trigger: {
      description: "Trigger",
      control: {
        type: "select",
        options: ["hover", "focus", "click", "contextMenu"]
      }
    }
  },
  decorators: [
    (Story) => (
      <div style={{padding: "100px 270px"}}>
        <Story/>
      </div>
    ),
  ],
};

export const Default = (args) => {
  const [open, setOpen] = useState(args.open);

  useEffect(() => {
    setOpen(args.open)
  }, [args.open]);

  return (
    <Tooltip
      {...args}
      open={open}
      onOpenChange={() => setOpen(!open)}
    >
      <Button>{args.text}</Button>
    </Tooltip>
  );
};

Default.args = {
  title: "Thanks for using antd. Have a nice day!",
  text: "Scroll The Window",
  placement: "top",
  trigger: "hover",
  color: "#302828",
  arrow: true,
  open: true,
};