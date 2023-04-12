import { DatePicker, Space } from "antd";
import {useEffect, useState} from "react";
const { RangePicker } = DatePicker;

export default {
  title: "DatePicker",
  component: Space,
  parameters: {
    docs: {
      description: {
        component: "DatePicker",
      },
    },
  },
  argTypes: {
    picker: {
      description: "Picker",
      control: {
        type: "select",
        options: ["time", "date", "week", "month", "quarter", "year"]
      }
    },
    size: {
      description: "Picker",
      control: {
        type: "select",
        options: ["large", "middle", "small"]
      }
    },
    status: {
      description: "Status",
      control: {
        type: "select",
        options: ["error", "warning", "default"]
      }
    },
    placement: {
      description: "Placement",
      control: {
        type: "select",
        options: ["topLeft", "topRight", "bottomLeft", "bottomRight"]
      }
    },
    format: {
      description: "Placement",
      control: {
        type: "select",
        options: ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY']
      }
    },
    RangePicker: { description: "Range Picker", type: "boolean" },
    open: { description: "Open", type: "boolean" },
    showTime: { description: "Show Time", type: "boolean" },
    disabled: { description: "Disabled", type: "boolean" },
    bordered: { description: "Bordered", type: "boolean" },
    extraFooter: { description: "Extra Footer", type: "string" },
  },
  decorators: [
    (Story) => (
      <div style={{margin: "0 auto"}}>
        <Story/>
      </div>
    ),
  ],
};

export const Default = (args) => {
  const [open, setOpen] = useState(args.open);

  useEffect(() => {
    setOpen(args.open);
  }, [args.open])

  return (
    <Space style={{width: "400px"}}>
      { args.RangePicker
        ? < RangePicker
            {...args}
            renderExtraFooter={() => <div style={{paddingLeft: 20}}>{args.extraFooter}</div>}
            open={open}
            onOpenChange={() => setOpen(!open)}
          />
        : <DatePicker
            {...args}
            renderExtraFooter={() => <div style={{paddingLeft: 20}}>{args.extraFooter}</div>}
            open={open}
            onOpenChange={() => setOpen(!open)}
          />
      }
    </Space>
  );
};

Default.args = {
  picker: "time",
  size: "middle",
  status: "default",
  placement: "bottomLeft",
  format: "DD-MM-YY",
  extraFooter: "extra footer",
  open: true,
  bordered: true,
  showTime: false,
  RangePicker: false,
  disabled: false,
};