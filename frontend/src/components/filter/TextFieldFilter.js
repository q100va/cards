import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import _ from 'lodash';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { AccordionActions, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

    heading: {
        //padding: theme.spacing(0),
        //fontSize: theme.typography.pxToRem(12),
        //fontWeight: theme.typography.fontWeightRegular,
    },
    detailes: {
        width: '5em',
        padding: theme.spacing(0, 6, 0, 0),

    },

}));

function TextFieldFilter1(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({});
    const [error, setError] = React.useState(new Set());

    const handleApply = () => {
        const newError = new Set();
        if (state.min > state.max) {
            newError.add("min")
            newError.add("max")
        } else {
            if (state.min < props.min || state.min > props.max) {
                newError.add("min")
            }
            if (state.max < props.min || state.max > props.max) {
                newError.add("max")
            }
        }
        if (!_.isEqual(newError, error)) {
            setError(newError)
        }
        if(newError.size === 0) {
            props.onChange?.(state)
        }
    }

    const handleNumericChange = (event) => {
        error.delete(event.target.name);
        if (event.target.value.length === 0) {
            delete state[event.target.name]
            setState({ ...state })
        } else {
            setState({ ...state, [event.target.name]: +event.target.value })
        }
    }

    const inputProps = { min: props.min, max: props.max }

    return (

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                <Typography className={classes.heading}>{props.title + " " + props.unit}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div>
                    <TextField
                        error={error.has("min")}
                        label="min"
                        name="min"
                        placeholder={props.min.toString()}
                        className={classes.detailes}
                        variant="outlined"
                        size="small"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={inputProps}
                        onChange={handleNumericChange}
                    />
                </div>
                <div>
                    <TextField
                        error={error.has("max")}
                        label="max"
                        name="max"
                        placeholder={props.max.toString()}
                        className={classes.detailes}
                        variant="outlined"
                        size="small"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={inputProps}
                        onChange={handleNumericChange}
                    />
                </div>
            </AccordionDetails>
            <AccordionActions>
                <Button variant="contained" color="primary" size="small" onClick={handleApply} disabled={_.isEmpty(state)}>
                    Применить
                </Button>
            </AccordionActions>
        </Accordion>

    );
}



const whatHappened = (obj) => {
    alert(JSON.stringify(obj))
}

export default function TextFieldFilter() {
    return <TextFieldFilter1 title="Количество" min={10} max={597} unit="(чел.)" onChange={whatHappened} />
}
