import React from 'react';

import Upload from 'antd/lib/upload';
import Icon from 'antd/lib/icon';
import message from 'antd/lib/message';

const { Dragger } = Upload;

class UploadE extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  hi = {
    name: 'file',
    multiple: true,
    action: '//jsonplaceholder.typicode.com/posts/',
    onChange(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  render() {
    return (
      <Dragger {...this.hi}>
        <p className="ant-upload-drag-icon">
          <Icon type="inbox" />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>
    );
  }
}

export default UploadE;
