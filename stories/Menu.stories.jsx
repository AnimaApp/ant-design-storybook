import { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  MailOutlined
} from '@ant-design/icons';
import { Button, Menu } from 'antd';

export default {
  title: "Menu",
  component: Menu,
  parameters: {
    docs: {
      description: {
        component: "Menu",
      },
    },
  },
  argTypes: {
    mode: {
      control: {
        type: "select",
        options: ["vertical", "horizontal", "inline"]
      },
    },
    theme: {
      control: {
        type: "select",
        options: ["light", "dark"]
      },
    },
    triggerSubMenuAction: {
      description: "Trigger Sub Menu Action",
      control: {
        type: "select",
        options: ["hover", "click"]
      },
    },
  }
};

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];

export const Default = (args) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      style={{
        width: 256,
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        {...args}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

Default.args = {
  mode: "inline",
  theme: "light",
};