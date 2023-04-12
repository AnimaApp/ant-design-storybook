import { Radio, Space } from "antd";
const { Group } = Radio;

export default {
  title: "RadioGroup",
  component: Group,
  parameters: {
    docs: {
      description: {
        component: "Radio",
      },
    },
  },
  argTypes: {
    disabled: { description: "Disabled", type: "boolean" },
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["large", "middle", "small"]
      }
    },
    optionType: {
      description: "Option Type",
      control: {
        type: "select",
        options: ["default", "button"]
      }
    },
    buttonStyle: {
      description: "ButtonS tyle",
      control: {
        type: "select",
        options: ["outline", "solid"]
      }
    },
    direction: {
      description: "Direction",
      control: {
        type: "select",
        options: ["horizontal", "vertical"]
      }
    },
    items: { description: "Items", type: "story" },
  }
};

const data = [
  { value: "a", label: "Hangzhou" },
  { value: "b", label: "Shanghai" },
  { value: "c", label: "Beijing" },
  { value: "d", label: "Chengdu" },
]

export const Default = (args) => {
  return (
    <Group {...args}>
      <Space direction={args.direction}>
        {data.map((item, index) =>
          <Radio key={`${item.value}_${index}`} value={item.value}>{item.label}</Radio>
        )}
      </Space>
    </Group>
  );
};

Default.args = {
  size: "middle",
  direction: "horizontal",
  optionType: "default",
  buttonStyle: "outline",
  disabled: false,
  items: data,
};