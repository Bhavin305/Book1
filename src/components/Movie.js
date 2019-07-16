import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';



const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function MovieCard( { movie, handleClick, currrentIndex } ) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    handleClick(currrentIndex); 
    setExpanded(!expanded);
  }

  return (
    <div className="list-item">
      <div className="list-item-img-wrapper">
        <div className="item-img">
          <img src={`https://in.bmscdn.com/iedb/movies/images/mobile/listing/large/${movie.EventImageCode}.jpg`} alt={movie.EventTitle} />
        </div>
        <IconButton
          className="fix-play-ntn"
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Watch"
        >
          <PlayCircleOutlineIcon fontSize="large" />
        </IconButton>
        <div className="fix-show-date">19 July</div>
        <div className="list-item-legend">
          <p>100%</p>
          <small>16657 Votes</small>
        </div>
      </div>
      <div className="list-item-title">{movie.EventTitle}</div>
    </div>
  );
}

export default MovieCard;