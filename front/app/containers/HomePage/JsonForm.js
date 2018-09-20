import React from 'react';
import styled from 'styled-components';

import Form from 'antd/lib/form';
import notification from 'antd/lib/notification';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';

const FormItem = Form.Item;

class JsonFrom extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, { json }) => {
      if (!err) {
        this.changeJSON(json);
      }
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('json', {
            rules: [
              {
                required: true,
                message: 'Please introduce your json',
              },
            ],
          })(<Input />)}
        </FormItem>
      </Form>
    );
  }
}

export default JsonForm;
