import { Checkbox } from 'antd';

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    text: { type: "string" },
    checked: { type: "boolean" },
    disabled: { type: "boolean" },
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