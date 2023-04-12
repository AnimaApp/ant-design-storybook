import { Collapse } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import withIconMapped from "../decorators/withIconMapped";
import {iconOptions, iconTransform} from "../utils";

export default {
  title: "Collapse",
  compact: Collapse,
  parameters: {
    docs: {
      description: {
        component: "Collapse",
      },
    },
  },
  argTypes: {
    width: { description: "width", type: "number" },
    defaultActiveKey: {
      description: "defaultActiveKey",
      control: {
        type: "select",
        options: ["1", "2", "3"]
      },
    },
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["large", "middle", "small"]
      },
    },
    expandIconPosition: {
      description: "Expand Icon Position",
      control: {
        type: "select",
        options: ["start", "end"]
      },
    },
    collapsible: {
      description: "Collapsible",
      control: {
        type: "select",
        options: ["header", "icon", "disabled"]
      },
    },
    iconName: {
      description: "Icon",
      control: {
        type: "select",
        options: iconOptions,
        transform: iconTransform,
        required: false,
      },
    },
    accordion: { description: "Accordion", type: "boolean"},
    bordered: { description: "Bordered", type: "boolean"},
    showArrow: { description: "Show Arrow", type: "boolean"},
    ghost: { description: "Ghost", type: "boolean"},
    item: {
      type: "story",
      description: "item",
    },
    item2: {
      type: "story",
      description: "item",
    },
    item3: {
      type: "story",
      description: "item",
    },
  },
  decorators: [withIconMapped],
};

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const genExtra = (IconName) => (
  <SettingOutlined
    onClick={(event) => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}
  />
);

export const Default = (args) => {
  return (
    <Collapse
      {...args}
      defaultActiveKey={[args.defaultActiveKey]}
      style={{ width: args.width }}
    >
      <Collapse.Panel {...args} header={args.item.header} key="1" extra={args.iconName}>
        <p>{args.item.text}</p>
      </Collapse.Panel>
      <Collapse.Panel {...args} header={args.item2.header} key="2" extra={args.iconName}>
        <p>{args.item2.text}</p>
      </Collapse.Panel>
      <Collapse.Panel {...args} header={args.item3.header} key="3" extra={args.iconName}>
        <p>{args.item3.text}</p>
      </Collapse.Panel>
    </Collapse>
  );
};

Default.args = {
  width: 550,
  size: "middle",
  expandIconPosition: "start",
  collapsible: "header",
  accordion: false,
  bordered: true,
  showArrow: true,
  ghost: false,
  defaultActiveKey: "1",
  iconName: "None",
  item: {
    header: "This is panel header 1",
    text: text,
  },
  item2: {
    header: "This is panel header 2",
    text: text,
  },
  item3: {
    header: "This is panel header 3",
    text: text,
  },
};