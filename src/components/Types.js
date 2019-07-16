import React from 'react';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Selection from './Selection';
import useAppliedFilter from '../effects';

const useStyles = makeStyles(() => ({
    paper: {
      position: 'absolute',
      top: 36,
      right: 0,
      left: 0,
      width: 200,
      zIndex: 100
    }
}));


const types = [
    "Fresh",
    "Popular"
];

const Types = (props) => {
    const classes = useStyles();
  
    return(
        <Selection value="Types">
            <Paper className={classes.paper}>
                {types.map((type)=>(
                        <div>
                            <Checkbox
                                    checked={props.filters.includes(type)}
                                    onChange={() => props.appliedFilter('type', type)}
                                    value={type}
                                    inputProps={{
                                    'aria-label': 'primary checkbox',
                                    }}
                            />
                            {type}
                        </div>
                ))}
            </Paper>
        </Selection>
    );
}

export default Types;