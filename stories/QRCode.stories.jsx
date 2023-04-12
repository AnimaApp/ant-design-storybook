import { QRCode } from 'antd'

export default {
  title: "QRCode",
  component: QRCode,
  parameters: {
    docs: {
      description: {
        component: "QRCode",
      },
    },
  },
  argTypes: {
    value: { description: "Value", type: "string"},
    icon: { description: "Icon", type: "string"},
    iconSize: { description: "Icon Size", type: "number"  },
    size: { description: "Size", type: "number"},
    status: {
      description: "Status",
      control: {
        type: "select",
        options: ["active", "expired", "loading"]
      }
    },
    errorLevel: {
      description: "Status",
      control: {
        type: "select",
        options: ["L", "M", "Q", "H"]
      }
    },
    color: {
      description: "Color",
      control: {
        type: "color",
      }
    },
  },
};

export const Default = (args) => {
  return (
    <QRCode {...args} />
  )
};

Default.args = {
  value: "https://ant.design/",
  status: "active",
  size: 128,
  errorLevel: "M",
  icon: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
  iconSize: 32,
}