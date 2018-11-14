import React, { PureComponent } from 'react';
import './ToggleButtonGroup.less';
import PropTypes from 'prop-types';
import ToggleButton from './ToggleButton';

export default class ToggleButtonGroup extends PureComponent {
  static propTypes = {
    toggled: PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
    buttons: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })),
    onToggle: PropTypes.func.isRequired,
  };

  onChange = button => () => {
    /**
     * Don't change the toggled state if toggled state is already set to the clicked button
     */
    if (button.value === this.props.toggled.value) {
      return;
    }
    this.props.onToggle(button);
  };

  render() {
    /**
     * Map each button in buttons into ToggleButton components. If there is no toggled
     * button yet, the first ToggleButton (index === 0) is set to active.
     */
    return <div className="togglebuttons">
      {this.props.buttons.map((button, i) => <ToggleButton
        key={`togglebutton-${i}`}
        active={this.props.toggled === null
          ? i === 0
          : button.value === this.props.toggled.value
        }
        onClick={this.onChange(button)}>{button.label}</ToggleButton>)}
    </div>;
  }
}
