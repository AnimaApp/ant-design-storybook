import { Divider } from 'antd';

export default {
  title: "Divider",
  component: Divider,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["horizontal", "vertical"]
      },
    },
    dashed: { type: "boolean" },
    text: { type: "string" },
    plain: { type: "boolean" },
    orientation: {
      control: {
        type: "select",
        options: ["center", "left", "right"]
      },
    },
    orientationMargin: { type: "number" },
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