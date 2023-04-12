import { Switch } from 'antd';

export default {
  title: "Switch",
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: "Switch",
      },
    },
  },
  argTypes: {
    defaultChecked: { description: "Default Checked", type: "boolean" },
    disabled: { description: "Disabled", type: "boolean" },
    loading: { description: "Loading", type: "boolean" },
    checkedChildren: { description: "Checked Children", type: "string" },
    unCheckedChildren: { description: "Un Checked Children", type: "string" },
    size: {
      description: "Size",
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