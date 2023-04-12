import {Alert, Button} from 'antd';

export default {
  title: "Alert",
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: "Alert",
      },
    },
  },
  argTypes: {
    message: { description: "message", type: "string"},
    description: { description: "Description", type: "string"},
    closeText: { description: "Close Text", type: "string"},
    closable: { description: "Closable", type: "boolean"},
    showIcon: { description: "Show Icon", type: "boolean"},
    banner: { description: "Show Icon", type: "boolean"},
    actionText: { description: "Action Text", type: "string"},
    type: {
      description: "Type",
      control: {
        type: "select",
        options: ["success", "info", "warning", "error"],
      }
    }
  }
};

export const Default = (args) => {
  return (
    <Alert
      {...args}
      action={
        <Button size="default" type="text">
          {args.actionText}
        </Button>
      }
    />
  )
};

Default.args = {
  type: "success",
  message: "Success Text",
  description: "Description Text",
  closeText: "Close Now",
  closable: true,
  showIcon: true,
  banner: false,
  actionText: "UNDO",
};