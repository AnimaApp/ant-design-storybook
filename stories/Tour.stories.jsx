import { EllipsisOutlined } from '@ant-design/icons';
import {Button, Divider, Space, Tag, Tour} from 'antd';
import {useEffect, useRef, useState} from 'react';

export default {
  title: "Tour",
  component: Tour,
  parameters: {
    docs: {
      description: {
        component: "Tour",
      },
    },
  },
  argTypes: {
    arrow: { description: "Arrow", type: "boolean"},
    open: { description: "Open", type: "boolean"},
    mask: { description: "Mask", type: "boolean"},
    placement: {
      description: "Arrow",
      control: {
        type: "select",
        options: ["left", "leftTop", "leftBottom", "right", "rightTop", "rightBottom", "top", "topLeft", "topRight", "bottom", "bottomLeft", "bottomRight"]
      }
    },
    type: {
      description: "Type",
      control: {
        type: "select",
        options: ["default", "primary"]
      }
    },
  }
};



export const Default = (args) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(args.open);

  useEffect(() => {
    setOpen(args.open)
  }, [args.open]);

  const data = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ];

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>
      <Divider />
      <Space>
        <Button ref={ref1}>Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>
      <Tour
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        steps={data}
        indicatorsRender={(current, total) => (
          <span>
            {current + 1} / {total}
          </span>
        )}
      />
    </>
  );
};

Default.args = {
  placement: "bottom",
  type: "default",
  mask: true,
  open: false,
  arrow: true,
};