import { Tabs } from 'antd';
import { AppleOutlined } from '@ant-design/icons';
import {useState, useRef} from "react";

export default {
  title: "Tabs",
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component: "Tabs",
      },
    },
  },
  argTypes: {
    defaultActiveKey: {
      description: "Default Active Key",
      type: "string",
    },
    centered: { description: "Centered", type: "boolean" },
    tabPosition: {
      description: "Tab Position",
      control: {
        type: "select",
        options: ["top", "left", "right", "bottom"],
      }
    },
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["large", "middle", "small"],
      }
    },
    type: {
      description: "Type",
      control: {
        type: "select",
        options: ["line", "card", "editable-card"],
      }
    },
  }
};

const initialItems = [
  {
    key: '1',
    label: `Tab 1`,
    disabled: false,
  },
  {
    key: '2',
    label: `Tab 2`,
    disabled: true,
  },
  {
    key: '3',
    label: (
      <span>
        <AppleOutlined />
        Tab 3
      </span>
    ),
    disabled: false,
  },
];

export const Default = (args) => {
  const [activeKey, setActiveKey] = useState(args.defaultActiveKey);
  const [items, setItems] = useState(initialItems);
  const newTabIndex = useRef(0);
  const onChange = (newActiveKey) => {
    setActiveKey(newActiveKey);
  };
  const add = () => {
    const newActiveKey = `${newTabIndex.current++}`;
    const newPanes = [...items];
    newPanes.push({
      label: 'New Tab',
      key: newActiveKey,
    });
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };
  const remove = (targetKey) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };
  const onEdit = (targetKey, action) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };

  return (
    <Tabs
      {...args}
      item={items}
      onEdit={onEdit}
      onChange={onChange}
      activeKey={activeKey}
    />
  );
};

Default.args = {
  defaultActiveKey: "3",
  size: "middle",
  type: "card",
  tabPosition: "top",
  centered: false,
  items: initialItems,
};