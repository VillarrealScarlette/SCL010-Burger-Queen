import React from 'react';
import {Link} from "react-router-dom";
//importando material-iu
import Tab from '@material-ui/core/Tab';

const LinkTab = (props) => {
    return (
      <Tab component={Link} {...props}/>
    );
  }

export default LinkTab;