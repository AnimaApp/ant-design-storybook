import { InputNumber } from "antd";
import {iconOptions, iconTransform} from "../utils";
import {useMemo} from "react";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "InputNumber",
  component: InputNumber,
  parameters: {
    docs: {
      description: {
        component: "InputNumber",
      },
    },
  },
  argTypes: {
    min: { description: "Min", type: "number" },
    max: { description: "Max", type: "number" },
    width: { description: "Width", type: "number" },
    defaultValue: { description: "Default Value", type: "number" },
    leftIcon: {
      description: "Icon",
      control: {
        type: "select",
        options: iconOptions,
        transform: iconTransform,
        required: false,
      },
    },
    rightIcon: {
      description: "Icon",
      control: {
        type: "select",
        options: iconOptions,
        transform: iconTransform,
        required: false,
      },
    },
    status: {
      description: "status",
      control: {
        type: "select",
        options: ["error", "warning", "default"]
      }
    },
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["small", "middle", "large"],
      }
    },
    addonBefore: { description: "Addon Before", type: "string" },
    addonAfter: { description: "Addon After", type: "string" },
    prefix: { description: "Prefix", type: "string" },
    stringMode: { description: "String Mode", type: "boolean" },
    bordered: { description: "Bordered", type: "boolean" },
    keyboard: { description: "Keyboard", type: "boolean" },
    disabled: { description: "Disabled", type: "boolean" },
  },
  decorators: [withIconMapped],
};

export const Default = (args) => {
  const { leftIcon, rightIcon, addonBefore, addonAfter } = args;

  const beforeMemo = useMemo(() => {
    return addonBefore? addonBefore : leftIcon;
  }, [addonBefore, leftIcon]);

  const afterMemo = useMemo(() => {
    return addonAfter? addonAfter : rightIcon;
  }, [addonAfter, rightIcon]);

  return (
    <InputNumber
      {...args}
      addonBefore={ beforeMemo }
      addonAfter={ afterMemo }
      style={{ width: args.width }}
    />
  );
};

Default.args = {
  min: 1,
  max: 10,
  defaultValue: 3,
  width: 300,
  prefix: "%",
  addonBefore: "+",
  addonAfter: "-",
  leftIcon: "None",
  rightIcon: "None",
  status: "default",
  size: "middle",
  stringMode: false,
  bordered: true,
  keyboard: false,
  disabled: false,
};