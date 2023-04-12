import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import {useEffect, useState} from "react";

export default {
  title: "Dropdown",
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component: "Dropdown",
      },
    },
  },
  argTypes: {
    text: { description: "Text", type: "string" },
    arrow: { description: "Arrow", type: "boolean" },
    pointAtCenter: { description: "Point At Center", type: "boolean" },
    open: { description: "Open", type: "boolean" },
    selectable: { description: "Select Table", type: "boolean" },
    disabled: { description: "Disabled", type: "boolean" },
    defaultSelectedKeys: {
      description: "Default Selected Keys",
      control: {
        type: "select",
        options: ["1", "2", "3"]
      },
    },
    placement: {
      description: "Placement",
      control: {
        type: "select",
        options: ["bottom", "bottomLeft", "bottomRight", "top", "topLeft", "topRight"]
      },
    },
    trigger: {
      description: "Trigger",
      control: {
        type: "select",
        options: ["click", "hover", "contextMenu"]
      }
    },
    items: { description: "Items", type: "story" }
  }
};

const items = [
  {
    key: '1',
    label: "1rd menu item",
  },
  {
    key: '2',
    label: "2rd menu item",
  },
  {
    key: '3',
    label: "3rd menu item",
  },
];

export const Default = (args) => {
  const [open, setOpen] = useState(args.open);

  useEffect(() => {
    setOpen(args.open);
  }, [args.open])

  return (
    <Dropdown
      {...args}
      onOpenChange={() => setOpen(!open)}
      open={open}
      arrow={args.pointAtCenter? args.pointAtCenter : args.arrow}
      menu={{
        items,
        selectable: args.selectable,
        defaultSelectedKeys: args.defaultSelectedKeys
    }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {args.text}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

Default.args = {
  text: "Hover me",
  trigger: "hover",
  arrow: false,
  pointAtCenter: false,
  open: false,
  selectable: false,
  disabled: false,
  placement: "bottomLeft",
  items: items,
};