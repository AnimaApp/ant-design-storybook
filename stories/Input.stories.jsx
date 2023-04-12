import {Input} from "antd";
const { Search } = Input;

export default {
  title: "Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component: "Input",
      },
    },
  },
  argTypes: {
    defaultValue: { description: "Default Value", type: "string" },
    addonBefore: { description: "Addon Before", type: "string" },
    addonAfter: { description: "Addon After", type: "string" },
    search: { description: "Search", type: "boolean" },
    bordered: { description: "Bordered", type: "boolean" },
    disabled: { description: "Disabled", type: "boolean" },
    width: { description: "Width", type: "number" },
    status: {
      description: "Status",
      control: {
        type: "select",
        options: ["error", "warning", "default"]
      }
    },
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["large", "middle", "small"]
      }
    },
  }
};

export const Default = (args) => {
  return (
    <>
      { args.search
      ? <Search {...args} style={{width: args.width}} />
      : <Input {...args} style={{width: args.width}} />
      }
    </>
  );
};

Default.args = {
  defaultValue: "animaapp",
  addonBefore: "http://",
  addonAfter: ".com",
  status: "default",
  size: "middle",
  width: 300,
  search: false,
  bordered: true,
  disabled: false,

};