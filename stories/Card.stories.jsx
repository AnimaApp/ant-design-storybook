import {Card} from "antd";

export default {
  title: "Card",
  component: Card,
  parameters: {
    docs: {
      description: {
        component: "Card",
      },
    },
  },
  argTypes: {
    title: { description: "Title", type: "string" },
    extraHref: { description: "Extra href", type: "string" },
    extraText: { description: "Extra Text", type: "string" },
    width: { description: "Width", type: "number" },
    bordered: { description: "Bordered", type: "boolean" },
    hoverable: { description: "Hverable", type: "boolean" },
    loading: { description: "Loading", type: "boolean" },
    type: {
      description: "Type",
      control: {
        type: "select",
        options: ["inner", "default"]
      }
    },
    size: {
      description: "Size",
      control: {
        type: "select",
        options: ["default", "small"]
      }
    },
    items: { description: "Items", type: "story" },
  }
};

const data = ["Card content", "Card content", "Card content"];

export const Default = (args) => {
  return (
    <Card
      {...args}
      extra={<a href={args.extraHref}>{args.extraText}</a>}
      style={{
        width: args.width,
      }}
    >
      {args.items.map((item, index) => (
        <p key={`${item}_${index}`}>{item}</p>
      ))}
    </Card>
  );
};

Default.args = {
  title: "Default size card",
  extraHref: "#",
  extraText: "More",
  type: "default",
  size: "default",
  width: 300,
  bordered: true,
  hoverable: false,
  loading: false,
  items: data,
};