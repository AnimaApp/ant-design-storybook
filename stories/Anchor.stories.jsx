import { Anchor, Row, Col } from 'antd';

export default {
  argTypes: {
    direction: {
      control: {
        type: "select",
        options: ["vertical", "horizontal"]
      },
    },
    affix: { type: "boolean" },
    showInkInFixed: { type: "boolean" },
    items: { description: "Data", type: "story" },
  }
};

const data = [
  {
    key: 'part-1',
    href: '#part-1',
    title: 'Part 1',
  },
  {
    key: 'part-2',
    href: '#part-2',
    title: 'Part 2',
  },
  {
    key: 'part-3',
    href: '#part-3',
    title: 'Part 3',
  },
];

const styles = {
  width: '100vw',
  height: '100vh',
  textAlign: 'center',
}

export const Default = (args) => {
  return (
    <Row>
      <Col span={16}>
        {args.items.map((item) =>
          <div id={item.key} key={item.key} style={{ ...styles}} />
        )}
      </Col>
      <Col span={8}>
        <Anchor {...args} items={args.items} />
      </Col>
    </Row>
  );
};

Default.args = {
  direction: "horizontal",
  affix: true,
  showInkInFixed: false,
  items: data,
}