import {Divider, Image, List, Typography} from 'antd';

export default {
  title: "List",
  component: List,
  parameters: {
    docs: {
      description: {
        component: "List",
      },
    },
  },
  argTypes: {
    header: { description: "Header", type: "string" },
    footer: { description: "Footer", type: "string" },
    bordered: { description: "bordered", type: "boolean" },
    dataSource: { description: "Data Source", type: "story" },
    mark: { description: "mark", type: "boolean" },
    markText: { description: "mark", type: "string" },
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["default", "small", "large"],
      }
    },
    itemLayout: {
      description: "Size",
      control: {
        type: "select",
        options: ["horizontal", "vertical"],
      }
    },
  }
};

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

export const Default = (args) => {
  return (
    <List
      {...args}
      header={<div>{args.header}</div>}
      footer={<div>{args.footer}</div>}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text mark={args.mark}>{args.markText}</Typography.Text> {item}
        </List.Item>
      )}
    />
  );
};

Default.args = {
  size: "default",
  itemLayout: "horizontal",
  header: "Header",
  footer: "Footer",
  bordered: true,
  dataSource: data,
  markText: "[ITEM]",
  mark: true,
};