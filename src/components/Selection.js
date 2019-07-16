import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    root: {
      position: 'relative',
    },
    paper: {
      position: 'absolute',
      top: 36,
      right: 0,
      left: 0,
    },
    fake: {
      backgroundColor: grey[200],
      height: theme.spacing(1),
      margin: theme.spacing(2),
      // Selects every two elements among any group of siblings.
      '&:nth-child(2n)': {
        marginRight: theme.spacing(3),
      },
    },
}));


const Selection = (props) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);


    const handleClick = () => {
        setOpen(prev => !prev);
    };
    
      const handleClickAway = () => {
        setOpen(false);
    };

  
    return(
        <div className={classes.root}>
            <ClickAwayListener onClickAway={handleClickAway}>
                <div>
                    <Button onClick={handleClick}>{props.value}</Button>
                    {open ? (
                        <Paper className={classes.paper}>
                            {props.children}
                        </Paper>
                    ) : null}
                </div>
            </ClickAwayListener>
    </div>
    );
}

export default Selection;