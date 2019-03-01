import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';
import React from 'react';

const styles = theme => ({
    paper: {
        margin: '15px',
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

function BeerItem(props) {  
    const {classes, name} = props;

    return <Paper className={classes.paper}>{name}</Paper>;
};

export default withStyles(styles)(BeerItem);