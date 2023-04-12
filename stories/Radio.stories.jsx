import { Radio } from "antd";
import {useEffect, useState} from "react";
const { Button } = Radio;

export default {
  title: "Radio",
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: "Radio",
      },
    },
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    radioButton: { description: "Radio Button", type: "boolean" },
    autoFocus: { description: "Auto Focus", type: "boolean" },
    checked: { description: "Checked", type: "boolean" },
    defaultChecked: { description: "Default Checked", type: "boolean" },
    disabled: { description: "disabled", type: "boolean" },
  }
};

export const Default = (args) => {
  const [checked, setChecked] = useState(args.checked);

  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked])

  return (
    <>
      { args.radioButton
        ? <Button {...args} >{args.label}</Button>
        : <Radio  {...args} >{args.label}</Radio>}
    </>
  );
};

Default.args = {
  label: "radio",
  radioButton: false,
  autoFocus: false,
  checked: false,
  defaultChecked: false,
  disabled: false,
};