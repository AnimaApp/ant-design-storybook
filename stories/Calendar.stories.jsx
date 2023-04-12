import { Alert, Calendar, theme } from 'antd';
import {useEffect, useState} from "react";
import dayjs from "dayjs";

export default {
    title: "Calendar",
    component: Calendar,
    parameters: {
        docs: {
            description: {
                component: "Calendar",
            },
        },
    },
    argTypes: {
        value: { description: "Value", type: "string" },
        alertMessage: { description: "Alert Message", type: "string" },
        width: { description: "Fullscreen", type: "number" },
        fullscreen: { description: "Fullscreen", type: "boolean" },
    },
    decorators: [
        (Story) => (
            <div>
                <Story/>
            </div>
        ),
    ],
};

export const Default = (args) => {
    const [value, setValue] = useState(() => dayjs(args.value));
    const [selectedValue, setSelectedValue] = useState(() => dayjs(args.value));
    const { token } = theme.useToken();

    useEffect(() => {
        setValue(() => dayjs(args.value));
        setSelectedValue(() => dayjs(args.value));
    }, [args.value])

    const onSelect = (newValue) => {
        setValue(newValue);
        setSelectedValue(newValue);
    };
    const onPanelChange = (newValue) => {
        setValue(newValue);
    };

    const wrapperStyle = {
        width: args.width,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };

    return (
      <>
          <Alert message={`${args.alertMessage} ${selectedValue?.format('YYYY-MM-DD')}`} />
          <Calendar
            {...args}
            value={value}
            onSelect={onSelect}
            onPanelChange={onPanelChange}
            style={wrapperStyle}
          />
      </>
    );
};

Default.args = {
    value: "2023-01-25",
    alertMessage: "You selected date:",
    width: 300,
    fullscreen: false,
};