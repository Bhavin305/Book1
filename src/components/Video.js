import React from 'react';

function getId(url= '') {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }
}

function Video (props) {
    return (
        <div class="play-box">
            <div className="play-frame">
                <iframe width="100%" height="100%" title={props.EventTitle} src={`https://www.youtube.com/embed/${getId(props.TrailerURL)}`} frameborder="0" />
            </div>
            <div className="play-detail-box-wrapper">
                <div className="play-detail-box">
                    <div>
                        <div>{props.EventTitle}</div>
                        <div>{props.EventLanguage}</div>
                        <div>{props.ShowDate}</div>
                        <small>{props.totalVotes} Votes</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video;