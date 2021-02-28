import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Navbar from '../components/bars/Navbar';
import Sidebar from '../components/bars/Sidebar';
import Filter from './Filter';

// mocks
import menuData from '../mock/mock.menu';
import EnhancedTable from '../components/Table';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    gridContainer: {
        marginLeft: "1em",
        marginRight: "1em",

    },
}));

export default function ComplexGrid() {
    const classes = useStyles();
    const [sidebarState, setSidebarState] = React.useState(false);

    let sidebarClicked = () => { setSidebarState(true) }

    return (
        <div className={classes.root}>
            <Sidebar open={sidebarState} menus={menuData} onClose={() => setSidebarState(false)} />
            <Grid container spacing={2} justify="center" >
                <Grid item xs={12}>
                    <Navbar onSidebarClick={sidebarClicked} />
                </Grid>
                <Grid item container spacing={2} className={classes.gridContainer}>
                    <Grid item xs={2}>
                        <Filter />
                    </Grid>
                    <Grid item xs={10} >
                        <EnhancedTable />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}