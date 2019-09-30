import React from 'react';

export default class Counter extends React.Component {
    state = {
        count: 0
    };
    handleClick = () => {
        this.setState((prevState, { count }) => ({
          count: prevState.count + 1
        }));
        console.log(this.state.count);
        
      };
    render() {
        return <button onClick={this.handleClick}></button>;
    }
}
