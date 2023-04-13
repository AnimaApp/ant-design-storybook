import { Tree } from "antd";


export default {
  title: "Tree",
  component: Tree,
  parameters: {
    docs: {
      description: {
        component: "Tree",
      },
    },
  },
  argTypes: {
    checkable: { description: "Checkable", type: "boolean" },
    draggable: { description: "Draggable", type: "boolean" },
    blockNode: { description: "Block Node", type: "boolean" },
    showLine: { description: "Show Line", type: "boolean" },
    switcherIcon: { description: "Switcher Icon", type: "boolean" },
    items: { description: "Items", type: "story" },
  }
};

const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title: 'leaf1',
            key: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            title: 'leaf2',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [
          {
            title: (
              <span
                style={{
                  color: '#1890ff',
                }}
              >
                sss
              </span>
            ),
            key: '0-0-1-0',
          },
        ],
      },
    ],
  },
];

export const Default = (args) => {
  const onDragEnter = (info) => {
    console.log(info);
  };

  return (
    <Tree
      {...args}
      treeData={args.items}
      onDragEnter={onDragEnter}
    />
  );
};

Default.args = {
  checkable: true,
  blockNode: true,
  draggable: true,
  showLine: true,
  switcherIcon: true,
  items: treeData,
};