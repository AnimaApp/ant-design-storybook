import { Cascader } from 'antd';
const { SHOW_CHILD } = Cascader;

export default {
  title: "Cascader",
  component: Cascader,
  argTypes: {
    placeholder: { type: "string" },
    width: { type: "number" },
    multiple: { type: "boolean" },
    disabled: { type: "boolean" },
    search: { type: "boolean" },
    hover: { type: "boolean" },
    showChecked: { type: "boolean" },
    size: {
      control: {
        type: "select",
        options: ["large", "middle", "small"]
      },
    },
    placement: {
      control: {
        type: "select",
        options: ["bottomLeft", "bottomRight", "topLeft", "topRight"]
      },
    },
    status: {
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