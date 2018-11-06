import React from 'react';
import './ToggleButtonGroup.less';
import PropTypes from 'prop-types';

export default class ToggleButtonGroup extends React.Component {
  static propTypes = {
    toggled: PropTypes.number.isRequired,
    buttons: PropTypes.arrayOf(PropTypes.shape({
      content: PropTypes.string.isRequired,
    })),
    onToggle: PropTypes.func.isRequired,
  };

  handleClick = i => () => {
    this.setState({
      toggled: i,
    });
  };

  render() {
    const buttons = this.props.buttons.map(
      (button, i) => <button
        key={i}
        onClick={this.props.onToggle(i)}
        className={this.props.toggled === i
          ? 'toggleButton toggleButtonGroup__toggled'
          : 'toggleButton'}
      >
        {button.content}
      </button>,
    );
    return <div className="togglebuttons__container">
      {buttons}
    </div>;
  }
}
