import { Rate } from 'antd';
import withIconMapped from "../decorators/withIconMapped";
import {iconOptions, iconTransform} from "../utils";

export default {
  title: "Rate",
  component: Rate,
  parameters: {
    docs: {
      description: {
        component: "Rate",
      },
    },
  },
  argTypes: {
    characterText: { description: "Character Text", type: "string"},
    allowHalf: { description: "Allow Half", type: "boolean"},
    disabled: { description: "Disabled", type: "boolean"},
    defaultValue: { description: "Default Value", type: "number"},
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
  const { iconName, characterText } = args;

  return (
    <Rate
      {...args}
      character={iconName === "None"? characterText : iconName}
    />
  );
};

Default.args = {
  defaultValue: 2,
  iconName: "StarFilled",
  allowHalf: false,
  disabled: false,
};