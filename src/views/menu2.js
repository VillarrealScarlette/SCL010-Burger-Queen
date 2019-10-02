import React, { Component } from 'react';
import Parent from './parent';

class Menu2 extends Component {
  state = {
    title:'placeholder title'
  }

  changeTheWorld = (newTitle) => {
      this.setState({title:newTitle});
  }

  render() {
    return (
      <div className="menu2">
         <Parent changeTheWorldEvent={this.changeTheWorld.bind(this, 'new world')} 
         keepTheWorldSameEvent={this.changeTheWorld.bind(this, 'same world')}
         title={this.state.title}/>
      </div>
    );
  }
}

export default Menu2;