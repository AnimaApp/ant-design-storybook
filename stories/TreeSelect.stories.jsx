import { TreeSelect } from "antd";
import {useState} from "react";
const { SHOW_PARENT, SHOW_ALL, SHOW_CHILD } = TreeSelect;

export default {
  title: "TreeSelect",
  component: TreeSelect,
  parameters: {
    docs: {
      description: {
        component: "TreeSelect",
      },
    },
  },
  argTypes: {
    placeholder: { description: "Placeholder", type: "string" },
    width: { description: "Width", type: "number" },
    maxHeight: { description: "Max Height", type: "number" },
    allowClear: { description: "AllowClear", type: "boolean" },
    loadData: { description: "LoadData", type: "boolean" },
    showSearch: { description: "Show Search", type: "boolean" },
    multiple: { description: "Multiple", type: "boolean" },
    treeLine: { description: "Tree Line", type: "boolean" },
    treeCheckable: { description: "Tree Checkable", type: "boolean" },
    treeDefaultExpandAll: { description: "tree Default ExpandAll", type: "boolean" },
    treeDataSimpleMode: { description: "tree Data Simple Mode", type: "boolean" },
    overflow: {
      description: "Overflow",
      control: {
        type: "select",
        options: ["visible", "hidden", "scroll", "auto"]
      }
    },
    placement: {
      description: "Placement",
      control: {
        type: "select",
        options: ["topLeft", "topRight", "bottomLeft", "bottomRight"]
      }
    },
    showCheckedStrategy: {
      description: "Show Checked Strategy",
      control: {
        type: "select",
        options: [SHOW_PARENT, SHOW_ALL, SHOW_CHILD, "default"]
      }
    },
    status: {
      description: "Show Checked Strategy",
      control: {
        type: "select",
        options: ["warning", "error", "default"]
      }
    },
    items: { description: "Items",  type: "story" },
  }
};

const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: (
              <b
                style={{
                  color: '#08c',
                }}
              >
                leaf3
              </b>
            ),
          },
        ],
      },
    ],
  },
];

export const Default = (args) => {
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    setValue(newValue);
  };

  const onLoadData = ({ id }) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(undefined);
      }, 300);
    });

  return (
    <TreeSelect
      {...args}
      treeData={args.items}
      style={{ width: args.width}}
      value={value}
      onChange={onChange}
      loadData={args.loadData && onLoadData}
      dropdownStyle={{
        maxHeight: args.maxHeight,
        overflow: args.overflow,
      }}
    />
  );
};

Default.args = {
  placeholder: "Please select",
  width: 300,
  maxHeight: 400,
  overflow: "auto",
  status: "default",
  placement: "bottomRight",
  showCheckedStrategy: "default",
  allowClear: true,
  loadData: true,
  showSearch: false,
  multiple: false,
  treeLine: false,
  treeCheckable: false,
  treeDefaultExpandAll: true,
  treeDataSimpleMode: true,
  items: treeData,
};