import { Checkbox } from 'antd';

export default {
  title: "Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: "Checkbox",
      },
    },
  },
  argTypes: {
    text: { description: "Text", type: "string" },
    checked: { description: "Checked", type: "boolean" },
    disabled: { description: "Disabled", type: "boolean" },
  }
};

export const Default = (args) => {
  return (
    <Checkbox
      {...args}
    >
      {args.text}
    </Checkbox>
  );
};

Default.args = {
  text: "Checkbox",
  checked: false,
  disabled: false,
};