import { AutoComplete, Input } from 'antd';
import React, { useState } from 'react';

export default {
  title: "AutoComplete",
  component: AutoComplete,
  argTypes: {
    placeholder: { type: "string" },
    width: { type: "number" },
    autoFocus: { type: "boolean" },
    disabled: { type: "boolean" },
    search: { type: "boolean" },
    status: {
      control: {
        type: "select",
        options: ["default", "warning", "error"]
      },
    },
  }
};

export const Default = (args) => {

  const onSelect = (data) => {
    console.log('onSelect', data);
  };

  return (
    <AutoComplete
      {...args}
      // options={options}
      style={{
        width: args.width,
      }}
      onSelect={onSelect}
      // onSearch={(text) => setOptions(getPanelValue(text))}
    >
      {args.search && <Input.Search size="large" placeholder="input here" enterButton />}
    </AutoComplete>
  );
};

Default.args = {
  placeholder: "input here",
  width: 200,
  autoFocus: false,
  disabled: false,
  status: "default",
  search: false,
}