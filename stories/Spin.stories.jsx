import { Spin } from "antd";
import {iconOptions, iconTransform} from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
    title: "Spin",
    component: Spin,
    parameters: {
      docs: {
        description: {
          component: "Spin",
        },
      },
    },
    argTypes: {
      tip: { description: "Type", type: "string"},
      spinning: { description: "Spinning", type: "boolean"},
      size: {
        description: "Size",
        control: {
          type: "select",
          options: ["small", "default", "large"],
        }
      },
      iconName: {
        description: "Icon",
        control: {
          type: "select",
          options: iconOptions,
          transform: iconTransform,
          required: false,
        },
      },
    },
  decorators: [withIconMapped],
};

export const Default = (args) => {
  return (
    <Spin {...args} indicator={args.iconName} />
  );
};

Default.args = {
  tip: "Loading",
  size: "default",
  spinning: true,
};