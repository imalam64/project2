import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import DeleteConfirm from '../DeleteConfirm/DeleteConfirm'

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ManageJob extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Manage Jobs</Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Edit or Close A Listing
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>
              <ListItemText primary="Job 1" secondary="Date Range" />
              <DeleteConfirm />
              <Button>Edit</Button>
              <Button>Close</Button>
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Job 2" secondary="Date Range" />
              <DeleteConfirm />
              <Button>Edit</Button>
              <Button>Close</Button>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Job 3" secondary="Date Range" />
              <DeleteConfirm />
              <Button>Edit</Button>
              <Button>Close</Button>
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Job 4" secondary="Date Range" />
              <DeleteConfirm />
              <Button>Edit</Button>
              <Button>Close</Button>
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

ManageJob.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ManageJob);