import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Collapse } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { Link } from 'react-router-dom';


/*
Props are:

* Callback to call whem Sidebar is close:
onClose = function()

* Menu list to show:
menus = [
    {
        name: "Праздники",
        id: "holidays",
        href: "/holidays"
    },
    {
        name: "Списки",
        id: "lists",
        next: [
            {
                name: "Домики",
                id: "institutions",
                href: "/institutions"
            },
            {
                name: "Жители домиков",
                id: "seniors",
                href: "/seniors"
            }
        ]
    }
]
*/

const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
    },
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));



function Sidebar(props) {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState({});

    const isExpanded = (id) => {
        return expanded[id];
    }

    const handleExpand = (id) => (event) => {
        const expd = expanded[id];
        setExpanded({ [id]: !expd });
    }

    const toggleSidebar = (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        if(props.onClose)
            props.onClose();
    }

    function renderMenuElement(element, depth) {
        if (depth > 2)
            throw RangeError(`Too many depth levels: ${depth}`);

        if ("href" in element) {
            const p = depth > 0 ? { className: classes.nested } : {};
            return (<ListItem button key={element.id} component={Link} to={element.href} {...p}>
                <ListItemText primary={element.name} />
            </ListItem>)
        }
        if ("next" in element) {
            return (
                <React.Fragment key={element.id}>
                    <ListItem button onClick={handleExpand(element.id)}>
                        <ListItemText primary={element.name} />
                        {isExpanded(element.id) ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={isExpanded(element.id)} timeout="auto" unmountOnExit>
                        {renderMenu(element.next, depth + 1)}
                    </Collapse>
                </React.Fragment>
            )
        }
    }

    function renderMenu(menus, depth) {
        if(!menus)
            return null;
        const ariaAttr = "aria-labelledby"
        const p = depth > 0 ? {
            component: "div",
            disablePadding: true
        } : {
                component: "nav",
                [ariaAttr]: "nested-list-subheader",
                className: classes.root
            }
        return (
            <List {...p}>
                {menus.map(element => renderMenuElement(element, depth))}
            </List>)
    }

    const anchor = "left";
    let depth = 0
    return (
        <Drawer anchor={anchor} open={props.open} onClose={toggleSidebar}>
            <div
                className={classes.list}
                role="presentation"
            >
                {renderMenu(props.menus, depth)}
            </div >
        </Drawer >
    )
}

export default Sidebar
