import { Divider } from 'antd';

export default {
  title: "Divider",
  component: Divider,
  parameters: {
    docs: {
      description: {
        component: "Divider",
      },
    },
  },
  argTypes: {
    type: {
      description: "Type",
      control: {
        type: "select",
        options: ["horizontal", "vertical"]
      },
    },
    dashed: { description: "Dashed", type: "boolean" },
    text: { description: "Text", type: "string" },
    plain: { description: "Plain", type: "boolean" },
    orientation: {
      description: "Orientation",
      control: {
        type: "select",
        options: ["center", "left", "right"]
      },
    },
    orientationMargin: { description: "Orientation Margin", type: "number" },
  }
};

export const Default = (args) => {
  return (
    <Divider {...args}>{args.text}</Divider>
  );
};

Default.args = {
  type: "horizontal",
  dashed: false,
  text: "text",
  plain: false,
  orientation: "center",
  orientationMargin: 0,
};