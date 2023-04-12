import { Checkbox } from 'antd';

export default {
  title: "CheckboxGroup",
  component: Checkbox.Group,
  argTypes: {
    disabled: { type: "boolean" },
    options: {
      type: "story",
    },
  }
};

export const Default = (args) => {
  const { options } = args;

  return (
    <Checkbox.Group
      {...args}
      options={Object.values(options)}
    />
  );
};

Default.args = {
  disabled: false,
  options: {
    item: "item",
    item2: "item2",
    item3: "item3",
  },

};