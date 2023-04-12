import { Button, Divider, Space, notification } from 'antd';
import React, { useMemo } from 'react';
import {
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from '@ant-design/icons';

export default {
  title: "Notification",
  component: notification,
  parameters: {
    docs: {
      description: {
        component: "Notification",
      },
    },
  },
  argTypes: {
    message: { description: "Message", type: "string"},
    description: { description: "Description", type: "string"},
    position: {
      description: "Position",
      control: {
        type: "select",
        options: ["topLeft", "topRight", "bottomLeft", "bottomRight"]
      }
    }
  }
};

const Context = React.createContext({
  name: 'Default',
});

export const Default = (args) => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: `Notification ${placement}`,
      description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
      placement,
    });
  };
  const contextValue = useMemo(
    () => ({
      name: 'Ant Design',
    }),
    [],
  );

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <Space>
        <Button type="primary" onClick={() => openNotification(args.position)}>
          <RadiusUpleftOutlined />
          Click me
        </Button>
      </Space>
    </Context.Provider>
  );
};

Default.args = {
  position: "topRight",
};