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
    items: {
      type: "story",
      description: "items",
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

const data = [
  {
    header: "This is panel header 1",
    text: text,
    key: "1"
  },
  {
  header: "This is panel header 2",
    text: text,
    key: "2"
  },
  {
  header: "This is panel header 3",
    text: text,
    key: "3"
  },
]

export const Default = (args) => {
  return (
    <Collapse
      {...args}
      defaultActiveKey={[args.defaultActiveKey]}
      style={{ width: args.width }}
    >
      {args.items.map((item) => (
        <Collapse.Panel {...args} header={item.header} key={item.key} extra={args.iconName}>
          <p>{item.text}</p>
        </Collapse.Panel>
      ))}
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
  items: data,
};