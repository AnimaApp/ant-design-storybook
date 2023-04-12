import { Pagination } from 'antd';

export default {
  title: "Pagination",
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component: "Pagination",
      },
    },
  },
  argTypes: {
    total: { description: "Total", type: "number" },
    defaultCurrent: { description: "Default Current", type: "number" },
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["small", "default"]
      },
    },
    showSizeChanger: { description: "Show Size Changer", type: "boolean" },
    showQuickJumper: { description: "Show Quick Jumper", type: "boolean" },
    disabled: { description: "Disabled", type: "boolean" },
    simple: { description: "Simple", type: "boolean" },
    showTotal: { description: "Show Total", type: "boolean" },
    // renderItem: { type: "boolean" },
  }
};

const itemRender = (_, type, originalElement) => {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
};

export const Default = (args) => {
  return (
    <Pagination
      {...args}
      // itemRender={args.renderItem? itemRender : null }
      showTotal={(total) => (
       args.showTotal? `Total ${total}: `: ''
      )}
    />
  );
};

Default.args = {
  total: 500,
  defaultCurrent: 1,
  size: "default",
  showSizeChanger: false,
  showQuickJumper: false,
  disabled: false,
  simple: false,
  // renderItem: false,
};