import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MultipleChoiceFilter from '../components/filter/MultipleChoiceFilter';
import TextFieldFilter from '../components/filter/TextFieldFilter';

const data = [
  {},
]

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}));

export default function Filter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <MultipleChoiceFilter />
        <TextFieldFilter />
    </div>
  );
}
