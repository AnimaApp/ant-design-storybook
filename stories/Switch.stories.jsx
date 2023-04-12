import { Switch } from 'antd';

export default {
  title: "Switch",
  component: Switch,
  argTypes: {
    defaultChecked: { type: "boolean" },
    disabled: { type: "boolean" },
    loading: { type: "boolean" },
    checkedChildren: { type: "string" },
    unCheckedChildren: { type: "string" },
    size: {
      control: {
        type: "select",
        options: ["small", "default"]
      },
    },
  },
};

export const Default = (args) => {
  return (
    <Switch {...args}/>
  );
};

Default.args = {
  size: "default",
  checkedChildren: "Swi",
  unCheckedChildren: "tch",
  defaultChecked: true,
  loading: false,
  disabled: false,
};