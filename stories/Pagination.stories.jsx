import { Pagination } from 'antd';

export default {
  title: "Pagination",
  component: Pagination,
  argTypes: {
    total: { type: "number" },
    defaultCurrent: { type: "number" },
    size: {
      control: {
        type: "select",
        options: ["small", "default"]
      },
    },
    showSizeChanger: { type: "boolean" },
    showQuickJumper: { type: "boolean" },
    disabled: { type: "boolean" },
    simple: { type: "boolean" },
    showTotal: { type: "boolean" },
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