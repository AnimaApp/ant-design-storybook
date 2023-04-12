import { Button, Popover } from 'antd';
import {useMemo} from "react";

export default {
  title: "Popover",
  component: Popover,
  parameters: {
    docs: {
      description: {
        component: "Popover",
      },
    },
  },
  argTypes: {
    title: { description: "Title", type: "string"},
    buttonText: { description: "Button Text", type: "string"},
    content: { description: "Content", type: "story"},
    trigger: {
      description: "Trigger",
      control: {
        type: "select",
        options: ["hover", "focus", "click"],
      }
    },
    placement: {
      description: "Trigger",
      control: {
        type: "select",
        options: [
          "bottomLeft",
          "bottom",
          "bottomRight",
          "rightBottom",
          "right",
          "rightTop",
          "leftBottom",
          "left",
          "leftTop",
          "topRight",
          "top",
          "topLeft"
        ],
      }
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '200px' }}>
        <Story/>
      </div>
    ),
  ],
};

const data = ["Content", "Content"];

export const Default = (args) => {
  const content = useMemo(() => (
   <div>
     {args.content.map((text, index) => (
       <p key={`${text}_${index}`}>{text}</p>
     ))}
   </div>
  ), [args.content]);

  return (
    <Popover
      {...args}
      content={content}
    >
      <Button type="primary">{args.buttonText}</Button>
    </Popover>
  )
};

Default.args = {
  title: "Title",
  buttonText: "Hover me",
  trigger: "hover",
  placement: "bottomLeft",
  content: data,
}