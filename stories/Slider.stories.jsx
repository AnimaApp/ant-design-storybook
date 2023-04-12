import { Slider } from "antd";

export default {
  title: "Slider",
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: "Slider",
      },
    },
  },
  argTypes: {
    min: { description: "Min", type: "number" },
    max: { description: "Max", type: "number" },
    step: { description: "Step", type: "number" },
    width: { description: "Width", type: "number" },
    range: { description: "Range", type: "boolean" },
    reverse: { description: "Reverse", type: "boolean" },
    vertical: { description: "Vertical", type: "boolean" },
    disabled: { description: "Disabled", type: "boolean" },
  },
  decorators: [
    (Story) => (
      <div style={{
        display: 'inline-block',
        height: 300,
        marginLeft: 30,
      }}>
        <Story/>
      </div>
    ),
  ],
};

export const Default = (args) => {
  return (
    <Slider {...args} style={{ width: args.width }} />
  );
};

Default.args = {
  min: 0,
  max: 100,
  step: 10,
  width: 350,
  range: false,
  reverse: false,
  vertical: false,
  disabled: false,
};