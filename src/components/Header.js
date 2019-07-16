import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Languages from './Languages';
import Types from './Types';
import Genres from './Genres';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  }
}));

const Header = (props) => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Movie Trailers
                    </Typography>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Coming Soon
                    </Button>
                    <Button variant="contained" color="secondary" disabled className={classes.button}>
                        Now Showing
                    </Button>
                    <Languages 
                        filters={props.filters}
                        appliedFilter={props.appliedFilter}/>
                    <Genres 
                        filters={props.filters}
                        appliedFilter={props.appliedFilter}
                    />
                    <Types 
                        filters={props.filters}
                        appliedFilter={props.appliedFilter}
                    />
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;