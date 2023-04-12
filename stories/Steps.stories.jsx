import { Steps } from "antd";
import {useMemo, useState} from "react";

export default {
  title: "Steps",
  component: Steps,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "default"]
      },
    },
    status: {
      control: {
        type: "select",
        options: ["wait", "process", "finish", "error"]
      },
    },
    direction: {
      control: {
        type: "select",
        options: ["vertical", "horizontal"]
      },
    },
    type: {
      control: {
        type: "select",
        options: ["default", "navigation", "inline"]
      },
    },
    progressDot: { type: "boolean" },
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
