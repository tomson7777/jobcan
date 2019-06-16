import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

interface HeaderProps {
  location: any;
  toggleSidebar(): void;
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props: HeaderProps) => {
  const classes = useStyles();
  console.log(props);
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          onClick={props.toggleSidebar}
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu">
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);
