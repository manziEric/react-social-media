import React, {Fragment} from 'react';
import NoImg from '../images/no-img.png';
import PropTypes from 'prop-types';

//MUI stuff
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  theme: {
    palette: {
      primary: {
        light: '#33c9d',
        main: '#00bcd4',
        dark: '#008394',
        contrastText: '#fff'
      }
    }
  },
  card: {
    display: 'flex',
    marginBottom: 20
  },
  cardContent: {
    width: '100%',
    flexDirection: 'column',
    padding: 25
  },
  cover: {
    minWidth: 200,
    objectFit: 'cover'
  },
  handle: {
    width: 60,
    height: 18,
    backgroundColor: theme.palette.primary.main,
    marginBottom: 7
  },
  date: {
    width: 100,
    height: 14,
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginBottom: 10
  },
  fullLine: {
    width: '90%',
    height: 15,
    backgroundColor: 'rgba(0,0,0,0.6)',
    marginBottom: 10
  },
  halfLine: {
    width: '50%',
    height: 15,
    backgroundColor: 'rgba(0,0,0,0.6)',
    marginBottom: 10
  }
});

const ScreamSkeleton = props => {
  const {classes} = props;

  const content = Array.from({length: 5}).map((item, index) => (
    <Card className={classes.card} key={index}>
      <CardMedia className={classes.cover} image={NoImg} />
      <CardContent className={classes.cardContent}>
        <div className={classes.handle} />
        <div className={classes.date} />
        <div className={classes.fullLine} />
        <div className={classes.fullLine} />
        <div className={classes.halfLine} />
      </CardContent>
    </Card>
  ));

  return <Fragment>{content}</Fragment>;
};

ScreamSkeleton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScreamSkeleton);
