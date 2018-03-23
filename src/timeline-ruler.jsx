import React from 'react';
import padNumber from './pad-function';

export default class TimelineRuler extends React.Component {
    constructor(props) {
        super(props);
        let secondsLength = props.seconds>0 ? props.seconds : 60;
        this.state = {seconds: this.getSecondsList(secondsLength)};
    }

    getSecondsList(seconds) {
        var list = [];
        var second = 10;
        do
        {
            var currentMinute = Math.floor(second/60);
            var currentSecond = (second - (currentMinute*60));
            list.push(`${padNumber(currentMinute,2)}:${padNumber(currentSecond,2)}`);
            second = second + 10;
        }
        while(second<=seconds)
        return list;
    }
    
    render() {
        return (
            <div className="timeline-editor__frames-ruler"
                style={{width:(this.state.seconds.length*100)+10}}>
                {this.state.seconds.map((second)=>
                    <div className="timeline-editor__frames-ruler-s10s">
                        <span>{second}</span>
                        <div className="timeline-editor__frames-ruler__second"></div>
                        <div className="timeline-editor__frames-ruler__second"></div>
                        <div className="timeline-editor__frames-ruler__second"></div>
                        <div className="timeline-editor__frames-ruler__second"></div>
                        <div className="timeline-editor__frames-ruler__second"></div>
                    </div>
                )}
            </div>
        );
    }
}