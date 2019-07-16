import React from 'react';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Selection from './Selection';
import zIndex from '@material-ui/core/styles/zIndex';

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


const genres = [
    "Drama",
    "Adventure",
    "Animation",
    "Fantasy",
    "Action",
    "Period",
    "Romantic",
    "Thriller",
    "Comedy",
    "Suspense",
    "Horror",
    "Historical",
    "War",
    "Animation",
    "Psychological",
    "Crime"
];

const Genres = (props) => {
    const classes = useStyles();
    return(
        <Selection value="Genres">
            <Paper className={classes.paper}>
                {genres.map((item)=>(
                        <div>
                            <Checkbox
                                checked={props.filters.includes(item)}
                                onChange={() => props.appliedFilter( 'genre', item)}
                                value={item}
                                inputProps={{
                                'aria-label': 'primary checkbox',
                                }}
                            />
                            {item}
                        </div>
                ))}
            </Paper>
        </Selection>
    );
}

export default Genres;