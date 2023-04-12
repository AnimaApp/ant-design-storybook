import { Descriptions } from "antd";
const { Item } = Descriptions;

export default {
  title: "Descriptions",
  component: Descriptions,
  parameters: {
    docs: {
      description: {
        component: "Descriptions",
      },
    },
  },
  argTypes: {
    title: { description: "Title", type: "string" },
    bordered: { description: "Bordered", type: "boolean" },
    colon: { description: "Colon", type: "boolean" },
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["large", "middle", "small"]
      },
    },
    layout: {
      description: "Layout",
      control: {
        type: "select",
        options: ["horizontal", "vertical"]
      },
    },
    items: { description: "Items", type: "story" },
  }
};

const data = [
  {label: "UserName", text: "Zhou Maomao" },
  {label: "Telephone", text: "1810000000" },
  {label: "Live", text: "Hangzhou, Zhejiang" },
  {label: "Remark", text: "empty" },
  {label: "Address", text: "No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China" },
];
export const Default = (args) => {
  return (
    <Descriptions {...args} >
      {args.items.map((item, index) => (
        <Item label={item.label} key={`${item.label}_${index}`}>
          {item.text}
        </Item>
      ))}
    </Descriptions>
  );
};

Default.args = {
  title: "User Info",
  size: "middle",
  layout: "horizontal",
  bordered: true,
  colon: false,
  items: data,
};