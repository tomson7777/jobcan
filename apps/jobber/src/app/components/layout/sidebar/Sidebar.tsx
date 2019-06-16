import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import { Icon } from '@material-ui/core';

import './sidebar.scss';

interface SidebarProps {
  shown: boolean;
  toggleSidebar(): void;
}

class Sidebar extends Component<SidebarProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const activeStyle = { color: 'red' };

    return (
      <div>
        <Drawer open={this.props.shown} onClose={this.props.toggleSidebar}>
          <nav>
            <IconButton
              onClick={this.props.toggleSidebar}
              edge="start"
              color="inherit"
              aria-label="Close Menu">
              <Icon>close</Icon>
            </IconButton>
            <List>
              {['offers', 'users'].map(text => (
                <ListItem button key={text}>
                  <NavLink
                    to={`/dashboard/${text}`}
                    activeStyle={activeStyle}
                    onClick={this.props.toggleSidebar}
                  >
                    <ListItemText primary={text} />
                  </NavLink>
                </ListItem>
              ))}
            </List>
          </nav>
        </Drawer>
      </div>
    );
  }
}

export default Sidebar;
