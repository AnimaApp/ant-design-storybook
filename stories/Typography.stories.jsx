import { Typography } from "antd";


export default {
  title: "Typography",
  component: Typography,
  parameters: {
    docs: {
      description: {
        component: "Typography",
      },
    },
  },
  argTypes: {

  }
};

export const Default = (args) => {
  return (
    <Typography></Typography>
  );
};