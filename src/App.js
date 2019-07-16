import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';
import AppliedFilter from './components/AppliedFilter';
import Movies from './components/Movies';
import useAppliedFilter from './effects';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const App = () => {
  const classes = useStyles();
  const {
        filters,
        filters2,
        appliedFilter,
        deleteFilter
   } = useAppliedFilter();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {/* <Paper className={classes.paper}> */}
              <Header 
                filters={filters2}
                appliedFilter={appliedFilter}
          />
          {/* </Paper> */}
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><AppliedFilter filters={filters2} deleteFilter={deleteFilter} /></Paper>
        </Grid>
        <Grid item xs={12}>
          <div className="movies-container">
            <Movies filters={filters} filters2={filters2} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;