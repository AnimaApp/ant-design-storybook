import { Statistic } from "antd";
import {iconOptions, iconTransform} from "../utils";
import withIconMapped from "../decorators/withIconMapped";
import {useMemo} from "react";

export default {
  title: "Statistic",
  component: Statistic,
  parameters: {
    docs: {
      description: {
        component: "Statistic",
      },
    },
  },
  argTypes: {
    title: { description: "Title", type: "string" },
    value: { description: "Value", type: "string" },
    precision: { description: "Precision", type: "number" },
    loading: { description: "Loading", type: "boolean" },
    valueStyle: {
      description: "value Style",
      control: {
        type: "color",
      }
    },
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
    prefix: { description: "Prefix", type: "string" },
    suffix: { description: "Suffix", type: "string" },
  },
  decorators: [withIconMapped],
};

export const Default = (args) => {
  const { leftIcon, rightIcon, prefix, suffix } = args;

  const prefixMemo = useMemo(() => {
    return prefix? prefix : leftIcon;
  }, [prefix, leftIcon]);

  const suffixMemo = useMemo(() => {
    return suffix? suffix : rightIcon;
  }, [suffix, rightIcon]);

  return (
    <Statistic
      {...args}
      prefix={ prefixMemo }
      suffix={ suffixMemo }
      valueStyle={{
        color: args.valueStyle,
      }}
    />
  );
};

Default.args = {
  title: "Active Users",
  value: "112893",
  precision: 2,
  valueStyle: "#3f8600",
  loading: false,
  leftIcon: "ArrowUpOutlined",
  prefix: "",
  rightIcon: "None",
  suffix: "%",
};