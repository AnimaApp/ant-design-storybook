import { Cascader } from 'antd';
const { SHOW_CHILD } = Cascader;

export default {
  title: "Cascader",
  component: Cascader,
  parameters: {
    docs: {
      description: {
        component: "Cascader",
      },
    },
  },
  argTypes: {
    placeholder: { description: "Placeholder", type: "string" },
    width: { description: "Width", type: "number" },
    multiple: { description: "Multiple", type: "boolean" },
    disabled: { description: "Disabled", type: "boolean" },
    search: { description: "Search", type: "boolean" },
    hover: { description: "Hover", type: "boolean" },
    showChecked: { description: "Show Checked", type: "boolean" },
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["large", "middle", "small"]
      },
    },
    placement: {
      description: "Placement",
      control: {
        type: "select",
        options: ["bottomLeft", "bottomRight", "topLeft", "topRight"]
      },
    },
    status: {
      description: "Status",
      control: {
        type: "select",
        options: ["default", "warning", "error"]
      },
    },
  }
};

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

export const Default = (args) => {
  const filter = (inputValue, path) =>
    path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);

  return (
    <Cascader
      options={options}
      {...args}
      showSearch={args.search && {
        filter,
      }}
      style={{ width: args.width }}
      expandTrigger={args.hover && "hover"}
      showCheckedStrategy={args.showChecked && SHOW_CHILD}
    />
  );
};

Default.args = {
  placeholder: "Please select",
  width: 250,
  size: "middle",
  placement: "bottomLeft",
  status: "default",
  showChecked: false,
  multiple: false,
  search: false,
  disabled: false,
  hover: false,
};