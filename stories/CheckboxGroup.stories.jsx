import { Checkbox } from 'antd';

export default {
  title: "CheckboxGroup",
  component: Checkbox.Group,
  parameters: {
    docs: {
      description: {
        component: "CheckboxGroup",
      },
    },
  },
  argTypes: {
    disabled: { description: "Disabled", type: "boolean" },
    options: {
      description: "Options",
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