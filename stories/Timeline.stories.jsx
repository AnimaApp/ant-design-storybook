import { Timeline } from "antd";

export default {
  title: "Timeline",
  component: Timeline,
  parameters: {
    docs: {
      description: {
        component: "Timeline",
      },
    },
  },
  argTypes: {
    pending: { description: "Pending", type: "string" },
    reverse: { description: "Reverse", type: "boolean" },
    mode: {
      description: "Mode",
      control: {
        type: "select",
        options: ["left", "right", "alternate"]
      }
    },
    items: { description: "Items", type: "story" },
  }
};

const data = [
  {
    label: '2015-09-01',
    children: 'Create a services',
  },
  {
    label: '2015-09-01 09:12:11',
    children: 'Solve initial network problems',
  },
  {
    children: 'Technical testing',
  },
  {
    label: '2015-09-01 09:12:11',
    children: 'Network problems being solved',
  },
]

export const Default = (args) => {
  return (
    <Timeline {...args} />
  );
};

Default.args = {
  pending: "Recording...",
  mode: "left",
  reverse: false,
  items: data,
};