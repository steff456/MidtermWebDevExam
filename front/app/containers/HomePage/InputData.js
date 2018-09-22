import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Antd
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import Divider from 'antd/lib/divider';
import notification from 'antd/lib/notification';

// Semantic
import { Segment } from 'semantic-ui-react';

// Redux
import { setGraphData } from './actions';

const { TextArea } = Input;

class InputData extends Component {
  static propTypes = {
    setGraphData: PropTypes.func.isRequired,
  };

  state = {
    text: '',
  };

  onChangeText = e => {
    this.setState({ text: e.target.value });
  };

  changeData = () => {
    const { text } = this.state;
    try {
      this.props.setGraphData(JSON.parse(text));
    } catch (err) {
      console.log(err);
      this.openNotificationWithIcon('error');
    }
  };

  openNotificationWithIcon = type => {
    notification[type]({
      message: 'Invalid JSON input',
      description: 'Verify the input!',
    });
  };

  render() {
    const { text } = this.state;
    return (
      <Segment textAlign="center">
        <TextArea
          rows={4}
          onPressEnter={this.changeData}
          onChange={this.onChangeText}
          value={text}
        />
        <Segment basic>
          <Button type="primary" onClick={this.changeData}>
            Change data
          </Button>
          <Divider type="vertical" />
          <Button type="primary" onClick={this.saveData}>
            Save data
          </Button>
        </Segment>
      </Segment>
    );
  }
}

const mapDispatchToProps = {
  setGraphData,
};

export default connect(
  null,
  mapDispatchToProps,
)(InputData);
