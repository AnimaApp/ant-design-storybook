import { Calendar } from 'antd'

export default {
    title: "Calendar",
    component: Calendar,
    argTypes: {
        fullscreen: { type: "boolean"},
    },
    decorators: [
        (Story) => (
            <div style={{ width: '700px' }}>
                <Story/>
            </div>
        ),
    ],
};

export const Default = (args) => {
    return <Calendar {...args} />;
};

Default.args = {
    fullscreen: true
};