import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { List, ListItem } from '@material-ui/core';


const values = [
    { id: "id1", value: "Алтайский край" },
    { id: "id2", value: "Московская область" },
    { id: "id3", value: "Ямало-Ненецкий АО" },
    { id: "id4", value: "Алтайский край" },
    { id: "id5", value: "Московская область" },
    { id: "id6", value: "Ямало-Ненецкий АО" },
    { id: "id11", value: "Алтайский край" },
    { id: "id21", value: "Московская область" },
    { id: "id31", value: "Ямало-Ненецкий АО" },
    { id: "id41", value: "Алтайский край" },
    { id: "id51", value: "Московская область" },
    { id: "id61", value: "Ямало-Ненецкий АО" },
    { id: "id12", value: "Алтайский край" },
    { id: "id22", value: "Московская область" },
    { id: "id32", value: "Ямало-Ненецкий АО" },
    { id: "id42", value: "Алтайский край" },
    { id: "id52", value: "Московская область" },
    { id: "id62", value: "Ямало-Ненецкий АО" },
    { id: "id112", value: "Алтайский край" },
    { id: "id212", value: "Московская область" },
    { id: "id312", value: "Ямало-Ненецкий АО" },
    { id: "id412", value: "Алтайский край" },
    { id: "id512", value: "Московская область" },
    { id: "id612", value: "Ямало-Ненецкий АО" },
]

const useStyles = makeStyles((theme) => ({


    heading: {
        //padding: theme.spacing(0),

        //fontSize: theme.typography.pxToRem(12),
        //fontWeight: theme.typography.fontWeightRegular,
    },
    details: {
        paddingTop: theme.spacing(0),
        paddingBottom: theme.spacing(1.5),
        maxHeight: "12em",
        overflowY: "auto"
    },
    list: {
        paddingTop: theme.spacing(0),
        paddingBottom: theme.spacing(0),
    },
    item: {
        paddingTop: theme.spacing(0),
        paddingBottom: theme.spacing(0),
    },

}));



function MultipleChoiceFilter1(props) {
    const classes = useStyles();
    const [state, setState] = React.useState(new Set());

    const handleChange = (event) => {
        if (event.target.checked) {
            state.add(event.target.name)
        } else {
            state.delete(event.target.name)
        }
        props.onChange?.(state);
        setState(new Set(state));
    };

    const checkboxes = props.values.map((e) => <ListItem key={e.id} className={classes.item}><FormControlLabel
        control={<Checkbox onChange={handleChange} checked={state[e.id]} name={e.id} color="primary" />}
        label={e.value} /></ListItem>);

    return (

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                <Typography className={classes.heading}>{props.title}</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
                <List>
                    {checkboxes}
                </List>
            </AccordionDetails>
        </Accordion>

    );
}

const whatHappened = (checkedList) => {
    alert(Array.from(checkedList))
}

export default function MultipleChoiceFilter() {
    return <MultipleChoiceFilter1 title="Регион" values={values} onChange={whatHappened} />
}