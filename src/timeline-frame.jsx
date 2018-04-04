import React from 'react';

export default class TimelineFrame extends React.Component {

    constructor(props) {
        super(props);
    }

    handleMouseClick(e) {
        this.props.dragEvent(e, this.props.layerKey, this.props.index);
    }

    render() {
        return (
            <span className="timeline-editor__frames-layer__item" 
                style={{width:this.props.frame.duration, left:this.props.frame.second}}
                onMouseDown={(e) => this.handleMouseClick(e)}>
                {this.props.frame.name}
            </span>
        );
    }
}