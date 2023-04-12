import { Button, message, Upload } from 'antd';
import withIconMapped from "../decorators/withIconMapped";
import {iconOptions, iconTransform} from "../utils";

export default {
  title: "Upload",
  component: Upload,
  parameters: {
    docs: {
      description: {
        component: "Upload",
      },
    },
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    name: { description: "Name", type: "string" },
    action: { description: "Action", type: "string" },
    maxCount: { description: "Action", type: "number" },
    listType: {
      description: "List Type",
      control: {
        type: "select",
        options: ["text", "picture", "picture-card", "picture-circle"]
      }
    },
    iconName: {
      description: "Icon",
      control: {
        type: "select",
        options: iconOptions,
        transform: iconTransform,
        required: false,
      },
    },
    showUploadList: { description: "Show Upload List", type: "boolean" },
    items: { description: "Items", type: "story" },
  },
  decorators: [withIconMapped],
};

const defaultFileList = [
  {
    uid: '1',
    name: 'xxx.png',
    status: 'uploading',
    url: 'http://www.baidu.com/xxx.png',
    percent: 33,
  },
  {
    uid: '2',
    name: 'yyy.png',
    status: 'done',
    url: 'http://www.baidu.com/yyy.png',
  },
  {
    uid: '3',
    name: 'zzz.png',
    status: 'error',
    response: 'Server Error 500',
    // custom error message to show
    url: 'http://www.baidu.com/zzz.png',
  },
]

export const Default = (args) => {
  const onChange = (info) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <Upload
      {...args}
      defaultFileList={args.items}
      onChange={onChange}
    >
      <Button icon={args.iconName}>{args.label}</Button>
    </Upload>
  );
};

Default.args = {
  label: "Click to Upload",
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  iconName: "UploadOutlined",
  maxCount: 3,
  listType: "text",
  showUploadList: true,
  items: defaultFileList,
};