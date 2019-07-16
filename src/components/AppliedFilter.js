import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles(() => ({
    paper: {
      position: 'absolute',
      top: 36,
      right: 0,
      left: 0,
    }
}));


const AppliedFilter = (props) => {
    const classes = useStyles();
    return(
        <Paper>
                Applied Filter 
                    <div className="selected-filter-item">
                        {props.filters.map(item => (
                            <>
                                <IconButton
                                    onClick={() => props.deleteFilter(item)}
                                    aria-label="Cancel"
                                    >
                                    <CancelIcon />
                                </IconButton>
                                <p> {item} </p>
                            </>
                        ))}
                    </div>
        </Paper>
    );
}

export default AppliedFilter;