import {Collapse, Image} from 'antd';
import {useEffect, useState} from "react";

export default {
  title: "ImagePreviewGroup",
  component: Image.PreviewGroup,
  parameters: {
    docs: {
      description: {
        component: "Image.PreviewGroup",
      },
    },
  },
  argTypes: {
    src: { description: "Src", type: "string" },
    width: { description: "Width", type: "number" },
    visible: { description: "Visible", type: "boolean" },
    preview: { description: "Preview", type: "boolean" },
    item: { description: "Item", type: "story" },
    item2: { description: "Item 2", type: "story" },
    item3: { description: "Item 3", type: "story" },
  }
};

export const Default = (args) => {
  const [visible, setVisible] = useState(args.visible);
  const { preview } = args;

  useEffect(() => {
    setVisible(args.visible);
  }, [args.visible])

  return (
    <div style={{display: "flex", alignItems: "center"}}>
      <Image
        {...args}
        preview={{ visible: false }}
        onClick={() => setVisible(true)}
      />
      <div style={{ display: preview?'none': 'block' }}>
        <Image.PreviewGroup
          preview={{
            visible,
            onVisibleChange: (vis) => setVisible(vis) }}
        >
          <Image {...args.item} width={args.width}/>
          <Image {...args.item2} width={args.width}/>
          <Image {...args.item3} width={args.width}/>
        </Image.PreviewGroup>
      </div>
    </div>
  );
};

Default.args = {
  src: "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
  width: 200,
  visible: false,
  preview: false,
  item: {
    src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  item2: {
    src: "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
  },
  item3: {
    src: "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
  },
};