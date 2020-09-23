import React, {Component} from 'react';
import './time2.css' 
import ThemedDigitalClock from "themed-digital-clock"


class Time2 extends Component  {
    render() {
      return (
        <div className="App">
          <ThemedDigitalClock
            description={this.props.desk}
            timezoneName={this.props.timezone}
            useDarkTheme={true}
            size={50}
          />
        </div>
      );
    }
  }

export default Time2;

