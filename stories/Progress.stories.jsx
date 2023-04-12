import { Progress } from "antd";

export default {
  title: "Progress",
  component: Progress,
  parameters: {
    docs: {
      description: {
        component: "Progress",
      },
    },
  },
  argTypes: {
    percent: { description: "Percent", type: "number" },
    steps: { description: "Steps", type: "number" },
    gapDegree: { description: "Gap Degree", type: "number" },
    showInfo: { description: "Show Info", type: "boolean" },
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["small", "default"]
      }
    },
    status: {
      description: "Status",
      control: {
        type: "select",
        options: ["success", "exception", "normal", "active"]
      }
    },
    type: {
      description: "Status",
      control: {
        type: "select",
        options: ["line", "circle", "dashboard"]
      }
    },
  }
};

export const Default = (args) => {
  return (
    <Progress {...args} />
  )
};

Default.args = {
  percent: 30,
  steps: 0,
  size: "default",
  type: "line",
  gapDegree: 30,
  status: "normal",
  showInfo: true,
}