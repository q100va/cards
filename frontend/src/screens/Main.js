import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Main() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button href="/filter">Filter</Button>
        <Button href="/grid">Grid</Button>
        <Button href="/mc_filter">MC_Filter</Button>
        <Button href="/tf_filter">TF_Filter</Button>
      </ButtonGroup>
    </div>
  );
}
