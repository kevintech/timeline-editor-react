import React from "react";
import ReactDOM from "react-dom";
import TimelineFrames from "./timeline-frames.jsx";
import PropTypes from "prop-types";
import "./timeline.scss";

class Timeline extends React.Component {

    constructor(props) {
        super(props);
        this.state = {layers: props.layers, frames: props.frames};
    }

    updateFrames(framesUpdated) {
        this.setState({frames: framesUpdated});
        this.props.onUpdateFrames(framesUpdated);
    }

    render() {
        return <div className="timeline-editor">
            <div className="timeline-editor__container">
                <div className="timeline-editor__layers">
                    <div className="timeline-editor__layers-header">Layers</div>
                    <ul>
                    {this.state.layers.map((layer)=>
                        <li key={layer.id}>{layer.name}</li>
                    )}
                    </ul>
                </div>
                <TimelineFrames frames={this.state.frames} 
                    layers={this.state.layers}
                    seconds="100" updateFrames={this.updateFrames.bind(this)} />
            </div>
        </div>
    }
}

Timeline.propTypes = {
    layers: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string 
    })),
    frames: PropTypes.objectOf(PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            second: PropTypes.number,
            duration: PropTypes.number
        })
    ))
}

export default Timeline;