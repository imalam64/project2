import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

const styles = {
    card: {
      minWidth: 275,
      maxWidth: 400,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      marginBottom: 16,
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };

function CalendarCard(props) {
   /*  state = {
      showCalendarCard = true
    }

    closeCard = () => {
      this.setState({ showCalendarCard: false});
    }; */

    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;

  return (
      <Card className={classes.card}>
        <CardContent>
          <List style={{fontWeight: 'bold', fontSize: 24}}>Job Title</List>
          <List>Employer</List>
          <List style={{fontSize: 14}}>Salary</List>
          <List style={{fontSize: 12}}>Start Date</List>
        </CardContent>
        <CardActions>
          <Button size="small">Edit Posting</Button>
        </CardActions>
        {/* <CardActions>
          <Button onClick={this.closeCard}>Close</Button>
        </CardActions> */}
      </Card>
    );
}

CalendarCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CalendarCard);
