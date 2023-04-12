import { Steps } from "antd";
import {useMemo, useState} from "react";

export default {
  title: "Steps",
  component: Steps,
  parameters: {
    docs: {
      description: {
        component: "Steps",
      },
    },
  },
  argTypes: {
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["small", "default"]
      },
    },
    status: {
      description: "Status",
      control: {
        type: "select",
        options: ["wait", "process", "finish", "error"]
      },
    },
    direction: {
      description: "Direction",
      control: {
        type: "select",
        options: ["vertical", "horizontal"]
      },
    },
    type: {
      description: "Type",
      control: {
        type: "select",
        options: ["default", "navigation", "inline"]
      },
    },
    progressDot: { description: "Progress Dot", type: "boolean" },
  }
};

const items = [
  {
    title: 'Finished',
  },
  {
    title: 'In Progress',
    subTitle: 'Left 00:00:08',
  },
  {
    title: 'Waiting',
  },
];

export const Default = (args) => {
  const [current, setCurrent] = useState(0);

  const onChange = (value) => {
    setCurrent(value);
  };

  const progress = useMemo(() => {
    return (100/items.length)*current;
  }, [current])

  return (
    <Steps
      current={current}
      onChange={onChange}
      {...args}
      items={items}
      percent={progress}
    />
  );
};

Default.args = {
  size: "default",
  direction: "horizontal",
  status: "process",
  type: "default",
  progressDot: false,
};
