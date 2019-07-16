import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Selection from './Selection';

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


const languages = [
    "Hindi",
    "English",
    "Tamil",
    "Telugu",
    "Marathi",
    "Kannada",
    "Malayalam",
    "Punjabi",
    "Bengali",
    "Gujarati",
    "Assamese",
    "Rajasthani",
    "French",
    "Bhojpuri",
    "Arabic",
    "Ladakhi",
    "Khasi",
    "Cantonese"
];

const Languages = (props) => {
    const classes = useStyles();
    return(
        <Selection value="Languages">
            <Paper className={classes.paper}>
                {languages.map((lang)=>(
                        <div>
                            <Checkbox
                                checked={props.filters.includes(lang)}
                                onChange={() => props.appliedFilter('language',lang)}
                                value={lang}
                                inputProps={{
                                'aria-label': 'primary checkbox',
                                }}
                            />
                            {lang}
                        </div>
                ))}
            </Paper>
        </Selection>
    );
}

export default Languages;