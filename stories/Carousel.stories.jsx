import { Carousel } from 'antd';

export default {
    title: "Carousel",
    compact: Carousel,
  parameters: {
    docs: {
      description: {
        component: "Carousel",
      },
    },
  },
    argTypes: {
      autoplay: { description: "Autoplay", type: "boolean" },
      dotPosition: {
        description: "dotPosition",
        control: {
          type: "select",
          options: ["top", "bottom", "left", "right"]
        },
      },
      effect: {
        description: "Effect",
        control: {
          type: "select",
          options: ["scrollx", "fade"]
        },
      },
    },
};

const contentStyle = {
    margin: 0,
    height: '260px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export const Default = (args) => {
    return (
        <Carousel {...args}>
            <div>
                <h3 style={contentStyle}>1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
    );
};

Default.args = {
  autoplay: false,
  dotPosition: "bottom",
  effect: "scrollx",
};